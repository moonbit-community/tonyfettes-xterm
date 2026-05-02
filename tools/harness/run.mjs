import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const toolsDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(toolsDir, '../..');
const defaults = {
  cases: path.join(toolsDir, 'cases/headless-basic.json'),
  snapshot: path.join(toolsDir, 'snapshots/headless-basic.snap.json'),
  referenceCmd: `${JSON.stringify(process.execPath)} ${JSON.stringify(path.join(toolsDir, 'reference-xterm.mjs'))}`,
  implementationCmd: process.env.MOONBIT_XTERM_SNAPSHOT_CMD
};

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    printHelp();
    return;
  }

  const casesPath = args.cases ?? defaults.cases;
  const snapshotPath = args.snapshot ?? defaults.snapshot;
  const referenceCmd = args.referenceCmd ?? defaults.referenceCmd;
  const implementationCmd = args.implementationCmd ?? defaults.implementationCmd;
  const suite = await readSuite(casesPath);

  if (args.list) {
    for (const testCase of suite.cases) {
      console.log(`${suite.name}/${testCase.name}`);
    }
    return;
  }

  if (args.update) {
    const snapshots = await runCases(referenceCmd, suite.cases);
    await fs.mkdir(path.dirname(snapshotPath), { recursive: true });
    await fs.writeFile(snapshotPath, JSON.stringify({
      suite: suite.name,
      source: 'xterm.js',
      snapshots
    }, null, 2) + '\n');
    console.log(`Updated ${path.relative(repoRoot, snapshotPath)} (${snapshots.length} cases)`);
    return;
  }

  if (args.referenceOnly) {
    const snapshots = await runCases(referenceCmd, suite.cases);
    console.log(JSON.stringify({
      suite: suite.name,
      source: 'xterm.js',
      snapshots
    }, null, 2));
    return;
  }

  if (!implementationCmd) {
    throw new Error([
      'No implementation command configured.',
      'Set MOONBIT_XTERM_SNAPSHOT_CMD or pass --implementation-cmd.',
      'The command must read one case JSON object from stdin and print one snapshot JSON object.'
    ].join('\n'));
  }

  const expected = await readExpectedSnapshots(snapshotPath, referenceCmd, suite.cases);
  const actual = await runCases(implementationCmd, suite.cases);
  compareSnapshots(expected, actual);
  console.log(`Compared ${actual.length} cases successfully`);
}

function parseArgs(argv) {
  const args = {};
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    switch (arg) {
      case '--cases':
        args.cases = requireValue(argv, ++i, arg);
        break;
      case '--snapshot':
        args.snapshot = requireValue(argv, ++i, arg);
        break;
      case '--reference-cmd':
        args.referenceCmd = requireValue(argv, ++i, arg);
        break;
      case '--implementation-cmd':
        args.implementationCmd = requireValue(argv, ++i, arg);
        break;
      case '--update':
        args.update = true;
        break;
      case '--reference-only':
        args.referenceOnly = true;
        break;
      case '--list':
        args.list = true;
        break;
      case '--help':
      case '-h':
        args.help = true;
        break;
      default:
        throw new Error(`Unknown argument: ${arg}`);
    }
  }
  return args;
}

function requireValue(argv, index, name) {
  const value = argv[index];
  if (!value) {
    throw new Error(`${name} requires a value`);
  }
  return value;
}

function printHelp() {
  console.log([
    'Usage: node tools/harness/run.mjs [options]',
    '',
    'Options:',
    '  --list                         List case names',
    '  --reference-only               Run reference snapshots and print JSON',
    '  --update                       Write expected snapshots from reference',
    '  --cases <path>                 Case suite path',
    '  --snapshot <path>              Expected snapshot path',
    '  --reference-cmd <command>      Reference snapshot command',
    '  --implementation-cmd <command> MoonBit snapshot command',
    '  -h, --help                     Show help'
  ].join('\n'));
}

async function readSuite(filePath) {
  const suite = JSON.parse(await fs.readFile(filePath, 'utf8'));
  if (!Array.isArray(suite.cases)) {
    throw new Error(`Case suite has no cases array: ${filePath}`);
  }
  return suite;
}

async function readExpectedSnapshots(snapshotPath, referenceCmd, cases) {
  try {
    const content = JSON.parse(await fs.readFile(snapshotPath, 'utf8'));
    if (!Array.isArray(content.snapshots)) {
      throw new Error(`Snapshot file has no snapshots array: ${snapshotPath}`);
    }
    return content.snapshots;
  } catch (error) {
    if (error?.code !== 'ENOENT') {
      throw error;
    }
    return runCases(referenceCmd, cases);
  }
}

async function runCases(command, cases) {
  const snapshots = [];
  for (const testCase of cases) {
    snapshots.push(await runSnapshotCommand(command, testCase));
  }
  return snapshots;
}

function runSnapshotCommand(command, testCase) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, {
      cwd: repoRoot,
      shell: true,
      stdio: ['pipe', 'pipe', 'pipe']
    });
    const stdout = [];
    const stderr = [];
    child.stdout.on('data', chunk => stdout.push(chunk));
    child.stderr.on('data', chunk => stderr.push(chunk));
    child.on('error', reject);
    child.on('close', code => {
      const out = Buffer.concat(stdout).toString('utf8');
      const err = Buffer.concat(stderr).toString('utf8');
      if (code !== 0) {
        reject(new Error([
          `Snapshot command failed for case "${testCase.name}" with exit code ${code}.`,
          `Command: ${command}`,
          err.trim()
        ].filter(Boolean).join('\n')));
        return;
      }
      try {
        resolve(JSON.parse(out));
      } catch (error) {
        reject(new Error([
          `Snapshot command returned invalid JSON for case "${testCase.name}".`,
          `Command: ${command}`,
          `Stdout: ${out.trim()}`,
          err.trim() ? `Stderr: ${err.trim()}` : ''
        ].filter(Boolean).join('\n')));
      }
    });
    child.stdin.end(JSON.stringify(testCase));
  });
}

function compareSnapshots(expected, actual) {
  const expectedByCase = new Map(expected.map(snapshot => [snapshot.case, snapshot]));
  for (const snapshot of actual) {
    const expectedSnapshot = expectedByCase.get(snapshot.case);
    if (!expectedSnapshot) {
      throw new Error(`No expected snapshot for case "${snapshot.case}"`);
    }
    try {
      assert.deepStrictEqual(snapshot, expectedSnapshot);
    } catch (error) {
      console.error(`Mismatch in case "${snapshot.case}"`);
      throw error;
    }
  }
}

main().catch(error => {
  console.error(error.stack ?? String(error));
  process.exitCode = 1;
});
