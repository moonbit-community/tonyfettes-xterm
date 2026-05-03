import { createReadStream, statSync } from 'node:fs';
import { createServer } from 'node:http';
import { extname, join, normalize, resolve, sep } from 'node:path';

const MIME_TYPES = new Map([
  ['.css', 'text/css; charset=utf-8'],
  ['.html', 'text/html; charset=utf-8'],
  ['.js', 'text/javascript; charset=utf-8'],
  ['.json', 'application/json; charset=utf-8'],
  ['.map', 'application/json; charset=utf-8'],
  ['.wasm', 'application/wasm'],
]);

function contentType(pathname) {
  return MIME_TYPES.get(extname(pathname)) ?? 'application/octet-stream';
}

function filePathFor(root, urlPath) {
  const pathname = decodeURIComponent(new URL(urlPath, 'http://localhost').pathname);
  const normalized = normalize(pathname).replace(/^(\.\.(\/|\\|$))+/, '');
  const relative = normalized === sep ? 'examples/browser/index.html' : normalized.slice(1);
  const filepath = resolve(root, relative);
  if (!filepath.startsWith(root + sep) && filepath !== root) {
    return undefined;
  }
  return filepath;
}

export function startStaticServer({ root = process.cwd(), port = 0 } = {}) {
  const absoluteRoot = resolve(root);
  const server = createServer((request, response) => {
    const filepath = filePathFor(absoluteRoot, request.url ?? '/');
    if (!filepath) {
      response.writeHead(403);
      response.end('Forbidden');
      return;
    }

    let stat;
    try {
      stat = statSync(filepath);
    } catch {
      response.writeHead(404);
      response.end('Not Found');
      return;
    }

    const resolvedFile = stat.isDirectory() ? join(filepath, 'index.html') : filepath;
    response.writeHead(200, { 'content-type': contentType(resolvedFile) });
    createReadStream(resolvedFile).pipe(response);
  });

  return new Promise((resolveServer, reject) => {
    server.once('error', reject);
    server.listen(port, '127.0.0.1', () => {
      server.off('error', reject);
      const address = server.address();
      resolveServer({
        server,
        url: `http://127.0.0.1:${address.port}/examples/browser/index.html`,
      });
    });
  });
}
