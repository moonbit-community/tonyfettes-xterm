import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');

async function main() {
  const testCase = JSON.parse(await readStdin());
  const Terminal = await loadXtermHeadless();
  const term = new Terminal(testCase.options ?? {});

  for (const write of testCase.writes ?? []) {
    await applyWrite(term, write);
  }

  console.log(JSON.stringify(snapshotTerminal(testCase, term), null, 2));
}

async function readStdin() {
  const chunks = [];
  for await (const chunk of process.stdin) {
    chunks.push(chunk);
  }
  return Buffer.concat(chunks).toString('utf8');
}

async function loadXtermHeadless() {
  const candidates = [
    path.join(repoRoot, 'reference/xterm.js/headless/lib-headless/xterm-headless.mjs'),
    path.join(repoRoot, 'reference/xterm.js/headless/lib-headless/xterm-headless.js')
  ];

  for (const candidate of candidates) {
    try {
      await fs.access(candidate);
      const mod = await import(pathToFileURL(candidate).href);
      const Terminal = mod.Terminal ?? mod.default?.Terminal ?? mod.default;
      if (typeof Terminal === 'function') {
        return Terminal;
      }
      throw new Error(`No Terminal export found in ${candidate}`);
    } catch (error) {
      if (error?.code === 'ENOENT') {
        continue;
      }
      throw error;
    }
  }

  throw new Error([
    'Missing built xterm.js headless reference.',
    'Expected one of:',
    ...candidates.map(candidate => `  - ${path.relative(repoRoot, candidate)}`),
    'Build it with:',
    '  npm --prefix reference/xterm.js install',
    '  npm --prefix reference/xterm.js run package-headless'
  ].join('\n'));
}

async function applyWrite(term, write) {
  if (typeof write === 'string') {
    await writeAsync(term, write);
    return;
  }
  if (typeof write?.text === 'string') {
    await writeAsync(term, write.text);
    return;
  }
  throw new Error(`Unsupported write entry: ${JSON.stringify(write)}`);
}

function writeAsync(term, data) {
  return new Promise(resolve => {
    term.write(data, resolve);
  });
}

function snapshotTerminal(testCase, term) {
  const active = term.buffer.active;
  const lines = [];
  for (let y = 0; y < term.rows; y++) {
    const line = active.getLine(active.viewportY + y);
    lines.push(line ? line.translateToString(true) : '');
  }
  return {
    case: testCase.name,
    cols: term.cols,
    rows: term.rows,
    screen: lines.join('\n'),
    lines
  };
}

main().catch(error => {
  console.error(error.stack ?? String(error));
  process.exitCode = 1;
});
