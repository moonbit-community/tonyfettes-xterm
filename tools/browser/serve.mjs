import { startStaticServer } from './static-server.mjs';

const portIndex = process.argv.indexOf('--port');
const port = portIndex === -1 ? 5173 : Number(process.argv[portIndex + 1]);
const { url } = await startStaticServer({ port });

console.log(`Serving browser example at ${url}`);
