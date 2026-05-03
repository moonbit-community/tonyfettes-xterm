import { createRequire } from 'node:module';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const require = createRequire(import.meta.url);
const CHROMIUM_EXECUTABLES = [
  process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE,
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
  `${process.env.HOME}/Library/Caches/ms-playwright/chromium_headless_shell-1208/chrome-headless-shell-mac-arm64/chrome-headless-shell`,
  `${process.env.HOME}/Library/Caches/ms-playwright/chromium_headless_shell-1148/chrome-mac/headless_shell`,
].filter(Boolean);

function loadPlaywright() {
  const candidates = [
    'playwright',
    resolve('reference/xterm.js/node_modules/playwright'),
  ];
  for (const candidate of candidates) {
    try {
      return require(candidate);
    } catch {
      // Try the next location.
    }
  }
  throw new Error('Playwright is required for browser smoke tests');
}

const { chromium } = loadPlaywright();
const url = pathToFileURL(resolve('examples/browser/index.html')).href;

async function launchChromium() {
  let lastError;
  const candidates = [undefined, ...CHROMIUM_EXECUTABLES.filter(existsSync)];
  for (const executablePath of candidates) {
    try {
      return await chromium.launch({
        headless: true,
        args: ['--allow-file-access-from-files'],
        ...(executablePath ? { executablePath } : {}),
      });
    } catch (error) {
      lastError = error;
    }
  }
  throw lastError;
}

const browser = await launchChromium();

const page = await browser.newPage({ viewport: { width: 900, height: 520 } });
const pageErrors = [];
page.on('pageerror', error => {
  pageErrors.push(error.stack ?? error.message);
});
await page.goto(url);
await page.waitForSelector('[data-testid="terminal-screen"]');
try {
  await page.waitForFunction(() => {
    const text = document.querySelector('[data-testid="terminal-screen"]')?.innerText ?? '';
    return text.includes('MoonBit xterm asciinema replay') ||
      text.includes('replay complete');
  });
  await page.waitForFunction(() => {
    const text = document.querySelector('[data-testid="terminal-screen"]')?.innerText ?? '';
    return text.includes('replay complete');
  });
} catch (error) {
  const text = await page.evaluate(() => document.querySelector('[data-testid="terminal-screen"]')?.innerText ?? '');
  throw new Error(`terminal replay did not settle: ${JSON.stringify({ text, pageErrors })}`, { cause: error });
}
const result = await page.evaluate(() => {
  const screen = document.querySelector('[data-testid="terminal-screen"]');
  const rows = [...document.querySelectorAll('.mb-xterm-row')];
  return {
    text: screen?.innerText ?? '',
    rowCount: rows.length,
    cursorCount: document.querySelectorAll('.mb-xterm-cell-cursor').length,
    focused: document.querySelector('.mb-xterm-focused') !== null,
  };
});
await browser.close();

if (!result.text.includes('moon check --target js')) {
  throw new Error(`terminal text was not rendered: ${JSON.stringify(result)}`);
}
if (!result.text.includes('asciinema play moonbit-xterm.cast')) {
  throw new Error(`asciinema command was not replayed: ${JSON.stringify(result)}`);
}
if (!result.text.includes('replay complete')) {
  throw new Error(`replay did not complete: ${JSON.stringify(result)}`);
}
if (result.rowCount !== 20) {
  throw new Error(`expected 20 terminal rows after resize, saw ${result.rowCount}`);
}
if (result.cursorCount !== 1) {
  throw new Error(`expected one cursor cell, saw ${result.cursorCount}`);
}

console.log(`Browser smoke passed at ${url}`);
