const http = require('http');
const url = require('url');

const port = process.argv[2];

const server = http.createServer(handleRequest);

function handleRequest(request, response) {
  const parsedUrl = url.parse(request.url, true);
  const iso = parsedUrl.query.iso;
  const d = new Date(iso);
  let json = {};

  switch (parsedUrl.pathname) {
    case '/api/parsetime':
      json = {
        hour: d.getHours(),
        minute: d.getMinutes(),
        second: d.getSeconds()
      };
      break;
    case '/api/unixtime':
      json = { unixtime: d.getTime() };
      break;
    default:
      return;
  }

  response.writeHead(200, { 'content-type': 'application/json' });
  response.end(JSON.stringify(json));
}

server.listen(port);
