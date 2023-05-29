import http from 'http';
import { readFile } from './readFile.js';

const PORT = 8000;

const server = http.createServer(async (req, res) => {
  if (req.url === '/') {
    const writeData = await readFile('./200.html');

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(writeData);
    res.end();
  } else if (req.url === '/404') {
    const writeData = await readFile('./404.html');

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(writeData);
    res.end();
  }
});

server.listen(PORT);
