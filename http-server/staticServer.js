const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');

const serverUrl = '127.0.0.1';
const serverPort = process.argv[2] || 3000;
const textContentType = { 'Content-Type': 'text/plain' };

const server = http.createServer(handleRequest);

function handleRequest(request, response) {
  const uri = url.parse(request.url).pathname;
  let fileName = path.join(process.cwd(), uri); // CWD = Current Working Directory

  fs.exists(fileName, exists => {
    if (!exists) {
      return fileError(response, 404, '404 Not Found');
    }

    if (fs.statSync(fileName).isDirectory()) {
      fileName += '/index.html';
    }

    fs.readFile(fileName, 'binary', (err, fileContents) => {
      if (err) {
        return fileError(response, 500, err);
      }

      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.write(fileContents, 'binary');
      response.end();
    });
  });
}

function fileError(response, status, message) {
  response.writeHead(status, textContentType);
  response.write(message + '\n');
  response.end();
}

server.listen(serverPort, serverUrl, () => {
  console.log(`Static file server running at http://${serverUrl}:${serverPort}`);
});
