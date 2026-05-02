import { spawn } from 'node:child_process';

async function main() {
  const testCase = JSON.parse(await readStdin());
  const options = testCase.options ?? {};
  const cols = options.cols ?? 80;
  const rows = options.rows ?? 24;
  const scrollback = options.scrollback ?? 1000;
  const writes = normalizeWrites(testCase.writes ?? []);
  const stdout = await runMoonBitSnapshot(cols, rows, scrollback, writes);
  const screen = stripOneTrailingNewline(stdout);
  const lines = screen.split('\n');

  console.log(JSON.stringify({
    case: testCase.name,
    cols,
    rows,
    screen,
    lines
  }, null, 2));
}

async function readStdin() {
  const chunks = [];
  for await (const chunk of process.stdin) {
    chunks.push(chunk);
  }
  return Buffer.concat(chunks).toString('utf8');
}

function normalizeWrites(writes) {
  return writes.map(write => {
    if (typeof write === 'string') {
      return write;
    }
    if (typeof write?.text === 'string') {
      return write.text;
    }
    throw new Error(`Unsupported starter harness write entry: ${JSON.stringify(write)}`);
  });
}

function runMoonBitSnapshot(cols, rows, scrollback, writes) {
  return new Promise((resolve, reject) => {
    const child = spawn('moon', [
      'run',
      'tools/harness/moonbit',
      '--',
      String(cols),
      String(rows),
      String(scrollback),
      ...writes
    ], {
      stdio: ['ignore', 'pipe', 'pipe']
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
          `MoonBit snapshot command failed with exit code ${code}.`,
          err.trim()
        ].filter(Boolean).join('\n')));
        return;
      }
      resolve(out);
    });
  });
}

function stripOneTrailingNewline(value) {
  return value.endsWith('\n') ? value.slice(0, -1) : value;
}

main().catch(error => {
  console.error(error.stack ?? String(error));
  process.exitCode = 1;
});
