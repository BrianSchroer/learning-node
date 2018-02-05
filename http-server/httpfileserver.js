const http = require('http');
const fs = require('fs-extra');
const path = require('path');

const contentTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.png': 'image/png',
  '.jpg': 'image/jpg',
  '.gif': 'image/gif'
};

http
  .createServer(async (req, res) => {
    const filePath = `${__dirname}/files${getRequestUrl(req)}`;

    try {
      console.log(`Serving ${filePath}...`);

      const content = await fs.readFile(filePath);

      reply(res, 200, getContentType(filePath), content);
    } catch (err) {
      console.log(err);
      reply(
        res,
        404,
        'text/html',
        '<html><body><h1>Not Found</h1></body></html>'
      );
    }
  })
  .listen(8080, err => {
    console.log('Server running on port 8080...');
  });

function getRequestUrl(req) {
  return req.url == '/' ? '/index.html' : req.url;
}

function getContentType(filePath) {
  return contentTypes.hasOwnProperty(path.extname(filePath)) || 'text/html';
}

function reply(res, status, contentType, content) {
  res.writeHead(status, { 'Content-Type': contentType });
  res.end(content, 'utf-8');
}
