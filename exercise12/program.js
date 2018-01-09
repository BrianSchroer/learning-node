const http = require('http');
const fs = require('fs');
const map = require('through2-map');

const port = process.argv[2];

const server = http.createServer(handleRequest);

function handleRequest(request, response) {
  if (request.method !== 'POST') {
    return;
  }

  request.pipe(map(chunk => chunk.toString().toUpperCase())).pipe(response);
}

server.listen(port);