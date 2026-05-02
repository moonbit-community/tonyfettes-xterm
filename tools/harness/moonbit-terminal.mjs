import { spawn } from 'node:child_process';

async function main() {
  const testCase = JSON.parse(await readStdin());
  const options = testCase.options ?? {};
  const cols = options.cols ?? 80;
  const rows = options.rows ?? 24;
  const scrollback = options.scrollback ?? 1000;
  const operations = normalizeOperations(testCase);
  const stdout = await runMoonBitSnapshot(testCase.name, cols, rows, scrollback, operations);

  console.log(stdout);
}

async function readStdin() {
  const chunks = [];
  for await (const chunk of process.stdin) {
    chunks.push(chunk);
  }
  return Buffer.concat(chunks).toString('utf8');
}

function normalizeOperations(testCase) {
  const steps = testCase.steps ?? testCase.writes ?? [];
  const operations = [];
  for (const step of steps) {
    if (typeof step === 'string') {
      operations.push('write', step);
      continue;
    }
    if (typeof step?.text === 'string') {
      operations.push('write', step.text);
      continue;
    }
    if (Array.isArray(step?.bytes)) {
      operations.push('writeBytes', normalizeBytes(step.bytes).join(','));
      continue;
    }
    if (typeof step?.writeln === 'string') {
      operations.push('writeln', step.writeln);
      continue;
    }
    if (Array.isArray(step?.writelnBytes)) {
      operations.push('writelnBytes', normalizeBytes(step.writelnBytes).join(','));
      continue;
    }
    if (typeof step?.input === 'string') {
      operations.push('input', step.input);
      continue;
    }
    if (step?.resize) {
      operations.push('resize', String(step.resize.cols), String(step.resize.rows));
      continue;
    }
    if (Number.isInteger(step?.scrollLines)) {
      operations.push('scrollLines', String(step.scrollLines));
      continue;
    }
    if (Number.isInteger(step?.scrollPages)) {
      operations.push('scrollPages', String(step.scrollPages));
      continue;
    }
    if (Number.isInteger(step?.scrollToLine)) {
      operations.push('scrollToLine', String(step.scrollToLine));
      continue;
    }
    if (step?.scrollToTop === true) {
      operations.push('scrollToTop');
      continue;
    }
    if (step?.scrollToBottom === true) {
      operations.push('scrollToBottom');
      continue;
    }
    if (step?.clear === true) {
      operations.push('clear');
      continue;
    }
    if (step?.reset === true) {
      operations.push('reset');
      continue;
    }
    throw new Error(`Unsupported harness step: ${JSON.stringify(step)}`);
  }
  return operations;
}

function normalizeBytes(bytes) {
  for (const byte of bytes) {
    if (!Number.isInteger(byte) || byte < 0 || byte > 255) {
      throw new Error(`Invalid byte value: ${byte}`);
    }
  }
  return bytes;
}

function runMoonBitSnapshot(caseName, cols, rows, scrollback, operations) {
  return new Promise((resolve, reject) => {
    const child = spawn('moon', [
      'run',
      'tools/harness/moonbit',
      '--',
      caseName,
      String(cols),
      String(rows),
      String(scrollback),
      ...operations
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
      try {
        JSON.parse(out);
        resolve(out.trimEnd());
      } catch (error) {
        reject(new Error([
          'MoonBit snapshot command returned invalid JSON.',
          `Stdout: ${out.trim()}`,
          err.trim() ? `Stderr: ${err.trim()}` : ''
        ].filter(Boolean).join('\n')));
      }
    });
  });
}

main().catch(error => {
  console.error(error.stack ?? String(error));
  process.exitCode = 1;
});
