const http = require('http');

const requestedUrl = process.argv[2];

let byteCount = 0;
let allData = [];

http.get(requestedUrl, response => {
  response.setEncoding('utf8');

  response.on('data', data => {
    byteCount += data.length;
    allData.push(data);
  });

  response.on('end', () => {
    console.log(byteCount);
    console.log(allData.join(''));
  });
});
