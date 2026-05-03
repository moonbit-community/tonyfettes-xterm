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
await page.locator('[data-testid="terminal-screen"]').click();
await page.keyboard.type('hello');
await page.keyboard.press('Enter');
await page.evaluate(() => {
  const input = document.querySelector('[data-testid="terminal-input"]');
  input.value = 'paste-ok';
  input.dispatchEvent(new InputEvent('input', { data: 'paste-ok', inputType: 'insertText', bubbles: true }));
  const clipboard = new DataTransfer();
  clipboard.setData('text/plain', 'clip-ok');
  const event = new ClipboardEvent('paste', { bubbles: true, cancelable: true });
  Object.defineProperty(event, 'clipboardData', { value: clipboard });
  input.dispatchEvent(event);
});
try {
  await page.waitForFunction(() => {
    const text = document.querySelector('[data-testid="terminal-screen"]')?.innerText ?? '';
    return text.includes('hello') && text.includes('paste-ok') && text.includes('clip-ok');
  });
} catch (error) {
  const text = await page.evaluate(() => document.querySelector('[data-testid="terminal-screen"]')?.innerText ?? '');
  throw new Error(`terminal input did not settle: ${JSON.stringify({ text, pageErrors })}`, { cause: error });
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

if (!result.text.includes('MoonBit xterm browser integration')) {
  throw new Error(`terminal text was not rendered: ${JSON.stringify(result)}`);
}
if (!result.text.includes('Rabbita DOM renderer')) {
  throw new Error(`renderer line was not rendered: ${JSON.stringify(result)}`);
}
if (!result.text.includes('hello')) {
  throw new Error(`keyboard input was not rendered: ${JSON.stringify(result)}`);
}
if (!result.text.includes('paste-ok')) {
  throw new Error(`input event text was not rendered: ${JSON.stringify(result)}`);
}
if (!result.text.includes('clip-ok')) {
  throw new Error(`clipboard paste text was not rendered: ${JSON.stringify(result)}`);
}
if (result.rowCount !== 14) {
  throw new Error(`expected 14 terminal rows, saw ${result.rowCount}`);
}
if (result.cursorCount !== 1) {
  throw new Error(`expected one cursor cell, saw ${result.cursorCount}`);
}
if (!result.focused) {
  throw new Error('terminal focus class was not rendered');
}

console.log(`Browser smoke passed at ${url}`);
