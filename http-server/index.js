const http = require('http');

const port = 8080;

http
  .createServer((req, res) => {
    console.log(req.url);
    res.write('<html><body><h1>Hello, World!</h1></body></html>');
    res.end();
  })
  .listen(8080, err => {
    console.log('listening on 8080...');
  });
