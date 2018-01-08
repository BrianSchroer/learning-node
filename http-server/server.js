const http = require('http');

const url = '127.0.0.1';
const port = '1337';

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  res.end('Hello, World\n');
});

server.listen(port, url, () => {
  console.log(`Server running at http://${url}:${port}`);
});
