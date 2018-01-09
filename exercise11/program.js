const http = require('http');
const fs = require('fs');

const port = process.argv[2];
const filePath = process.argv[3];

const server = http.createServer(handleRequest);

function handleRequest(request, response) {
  response.writeHead(200, { 'content-type': 'text/plain' });
  fs.createReadStream(filePath).pipe(response);
}

server.listen(port);
