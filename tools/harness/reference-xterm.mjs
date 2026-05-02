import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');

async function main() {
  const testCase = JSON.parse(await readStdin());
  const Terminal = await loadXtermHeadless();
  const events = createEventLog();
  const term = new Terminal(testCase.options ?? {});

  attachEvents(term, events);

  for (const write of testCase.writes ?? []) {
    await applyWrite(term, write);
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

function createEventLog() {
  return {
    bell: 0,
    binary: [],
    cursorMove: 0,
    data: [],
    lineFeed: 0,
    render: [],
    resize: [],
    scroll: [],
    titleChange: [],
    writeParsed: 0
  };
}

function attachEvents(term, events) {
  term.onBell?.(() => events.bell++);
  term.onBinary?.(data => events.binary.push(data));
  term.onCursorMove?.(() => events.cursorMove++);
  term.onData?.(data => events.data.push(data));
  term.onLineFeed?.(() => events.lineFeed++);
  term.onRender?.(range => events.render.push(range));
  term.onResize?.(size => events.resize.push(size));
  term.onScroll?.(position => events.scroll.push(position));
  term.onTitleChange?.(title => events.titleChange.push(title));
  term.onWriteParsed?.(() => events.writeParsed++);
}

async function applyWrite(term, write) {
  if (typeof write === 'string') {
    await writeAsync(term, write, false);
    return;
  }
  if (Array.isArray(write?.bytes)) {
    await writeAsync(term, new Uint8Array(write.bytes), false);
    return;
  }
  if (typeof write?.text === 'string') {
    await writeAsync(term, write.text, false);
    return;
  }
  if (typeof write?.line === 'string') {
    await writeAsync(term, write.line, true);
    return;
  }
  throw new Error(`Unsupported write entry: ${JSON.stringify(write)}`);
}

function writeAsync(term, data, line) {
  return new Promise(resolve => {
    if (line) {
      term.writeln(data, resolve);
    } else {
      term.write(data, resolve);
    }
  });
}

function snapshotTerminal(testCase, term, events) {
  return {
    case: testCase.name,
    cols: term.cols,
    rows: term.rows,
    modes: term.modes,
    events,
    buffers: {
      active: term.buffer.active.type,
      normal: snapshotBuffer(term.buffer.normal, term.cols),
      alternate: snapshotBuffer(term.buffer.alternate, term.cols)
    }
  };
}

function snapshotBuffer(buffer, cols) {
  const lines = [];
  for (let y = 0; y < buffer.length; y++) {
    const line = buffer.getLine(y);
    lines.push(line ? snapshotLine(line, buffer, cols) : null);
  }
  return {
    type: buffer.type,
    cursorX: buffer.cursorX,
    cursorY: buffer.cursorY,
    viewportY: buffer.viewportY,
    baseY: buffer.baseY,
    length: buffer.length,
    lines
  };
}

function snapshotLine(line, buffer, cols) {
  const reusableCell = buffer.getNullCell();
  const cells = [];
  const limit = Math.min(line.length, cols);
  for (let x = 0; x < limit; x++) {
    const cell = line.getCell(x, reusableCell);
    cells.push(cell ? snapshotCell(cell) : null);
  }
  return {
    isWrapped: line.isWrapped,
    text: line.translateToString(true),
    cells
  };
}

function snapshotCell(cell) {
  return {
    chars: cell.getChars(),
    width: cell.getWidth(),
    code: cell.getCode(),
    fgMode: cell.getFgColorMode(),
    fg: cell.getFgColor(),
    bgMode: cell.getBgColorMode(),
    bg: cell.getBgColor(),
    bold: !!cell.isBold(),
    italic: !!cell.isItalic(),
    dim: !!cell.isDim(),
    underline: !!cell.isUnderline(),
    blink: !!cell.isBlink(),
    inverse: !!cell.isInverse(),
    invisible: !!cell.isInvisible(),
    strikethrough: !!cell.isStrikethrough(),
    overline: !!cell.isOverline(),
    underlineStyle: cell.getUnderlineStyle(),
    underlineColorMode: cell.getUnderlineColorMode(),
    underlineColor: cell.getUnderlineColor()
  };
}

main().catch(error => {
  console.error(error.stack ?? String(error));
  process.exitCode = 1;
});
