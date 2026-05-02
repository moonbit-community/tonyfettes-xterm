import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');

async function main() {
  const testCase = JSON.parse(await readStdin());
  const Terminal = await loadXtermHeadless();
  const term = new Terminal(testCase.options ?? {});
  const events = {
    title: [],
    data: [],
    bell: 0
  };
  term.onTitleChange(title => events.title.push(title));
  term.onData(data => events.data.push(data));
  term.onBell(() => events.bell++);

  for (const step of testCase.steps ?? testCase.writes ?? []) {
    await applyStep(term, step);
  }

  console.log(JSON.stringify(snapshotTerminal(testCase, term, events), null, 2));
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

async function applyStep(term, step) {
  if (typeof step === 'string') {
    await writeAsync(term, step);
    return;
  }
  if (typeof step?.text === 'string') {
    await writeAsync(term, step.text);
    return;
  }
  if (Array.isArray(step?.bytes)) {
    await writeAsync(term, new Uint8Array(normalizeBytes(step.bytes)));
    return;
  }
  if (typeof step?.writeln === 'string') {
    await writelnAsync(term, step.writeln);
    return;
  }
  if (Array.isArray(step?.writelnBytes)) {
    await writelnAsync(term, new Uint8Array(normalizeBytes(step.writelnBytes)));
    return;
  }
  if (typeof step?.input === 'string') {
    term.input(step.input);
    return;
  }
  if (step?.resize) {
    term.resize(step.resize.cols, step.resize.rows);
    return;
  }
  if (Number.isInteger(step?.scrollLines)) {
    term.scrollLines(step.scrollLines);
    return;
  }
  if (Number.isInteger(step?.scrollPages)) {
    term.scrollPages(step.scrollPages);
    return;
  }
  if (Number.isInteger(step?.scrollToLine)) {
    term.scrollToLine(step.scrollToLine);
    return;
  }
  if (step?.scrollToTop === true) {
    term.scrollToTop();
    return;
  }
  if (step?.scrollToBottom === true) {
    term.scrollToBottom();
    return;
  }
  if (step?.clear === true) {
    term.clear();
    return;
  }
  if (step?.reset === true) {
    term.reset();
    return;
  }
  throw new Error(`Unsupported harness step: ${JSON.stringify(step)}`);
}

function writeAsync(term, data) {
  return new Promise(resolve => {
    term.write(data, resolve);
  });
}

function writelnAsync(term, data) {
  return new Promise(resolve => {
    term.writeln(data, resolve);
  });
}

function normalizeBytes(bytes) {
  for (const byte of bytes) {
    if (!Number.isInteger(byte) || byte < 0 || byte > 255) {
      throw new Error(`Invalid byte value: ${byte}`);
    }
  }
  return bytes;
}

function snapshotTerminal(testCase, term, events) {
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
    lines,
    buffer: {
      type: active.type,
      cursorX: active.cursorX,
      cursorY: active.cursorY,
      viewportY: active.viewportY,
      baseY: active.baseY,
      length: active.length
    },
    modes: term.modes,
    events
  };
}

main().catch(error => {
  console.error(error.stack ?? String(error));
  process.exitCode = 1;
});
