const http = require('http');

const requestedUrls = process.argv.slice(2);
const urlCount = requestedUrls.length;

let completeCount = 0;
let urlData = [];
for (let i = 0; i < urlCount; i++) {
  urlData[i] = [];
}

requestedUrls.forEach((requestedUrl, index) => {
  http.get(requestedUrl, response => {
    response.setEncoding('utf8');

    response.on('data', data => {
      urlData[index].push(data);
    });

    response.on('end', () => {
      completeCount++;
      if (completeCount === urlCount) {
        logResults();
      }
    });
  });
});

function logResults() {
  urlData.forEach(data => console.log(data.join('')));
}

