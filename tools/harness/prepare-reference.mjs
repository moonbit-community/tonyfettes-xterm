import { spawn } from 'node:child_process';
import { existsSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../..', import.meta.url));
const referenceDir = join(root, 'reference', 'xterm.js');
const npmCacheDir = mkdtempSync(join(tmpdir(), 'xterm-harness-npm-cache-'));
const headlessPackageJsonPath = join(referenceDir, 'headless', 'package.json');

const bundlePaths = [
  join(referenceDir, 'headless', 'lib-headless', 'xterm-headless.mjs'),
  join(referenceDir, 'headless', 'lib-headless', 'xterm-headless.js'),
];

const steps = [
  { command: 'npm', args: ['--prefix', 'reference/xterm.js', 'ci'] },
  { command: 'npm', args: ['--prefix', 'reference/xterm.js', 'run', 'build'] },
  {
    command: 'npm',
    args: ['--prefix', 'reference/xterm.js', 'run', 'package-headless'],
    env: { npm_config_cache: npmCacheDir },
  },
];

if (!existsSync(join(referenceDir, 'package.json'))) {
  console.error('xterm.js submodule is missing. Run git submodule update --init first.');
  process.exit(1);
}

const headlessPackageJsonBefore = existsSync(headlessPackageJsonPath)
  ? readFileSync(headlessPackageJsonPath, 'utf8')
  : undefined;

try {
  for (const step of steps) {
    await run(step);
  }

  if (!bundlePaths.some(existsSync)) {
    console.error('xterm.js headless bundle was not produced.');
    for (const path of bundlePaths) {
      console.error(`  missing: ${path}`);
    }
    process.exit(1);
  }

  console.log('xterm.js headless reference is ready.');
} finally {
  if (headlessPackageJsonBefore !== undefined) {
    writeFileSync(headlessPackageJsonPath, headlessPackageJsonBefore);
  }
  rmSync(npmCacheDir, { recursive: true, force: true });
}

function run({ command, args, env = {} }) {
  console.log(`==> ${command} ${args.join(' ')}`);

  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      cwd: root,
      env: {
        ...process.env,
        ...env,
      },
      stdio: 'inherit',
    });

    child.on('error', reject);
    child.on('exit', code => {
      if (code === 0) {
        resolve();
        return;
      }
      reject(new Error(`${command} ${args.join(' ')} failed with exit code ${code}`));
    });
  });
}
