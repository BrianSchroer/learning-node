const http = require('http');

const requestedUrl = process.argv[2];

http.get(requestedUrl, response => {
  response.setEncoding('utf8');
  response.on('data', data => console.log(data));
});