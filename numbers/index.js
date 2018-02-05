const http = require('http');
const fs = require('fs-extra');
const qs = require('querystring');

http
  .createServer(async (req, res) => {
    switch (req.method) {
      case 'GET':
        serveFile(res, 'form.html');
        break;

      case 'POST':
        let body = '';
        req.on('data', data => (body += data));
        req.on('end', () => {
          const query = qs.parse(body);
          const num1 = parseInt(query.num1);
          const num2 = parseInt(query.num2);
          const results = {
            num1,
            num2,
            add: num1 + num2,
            sub: num1 - num2,
            div: num1 / num2,
            mul: num1 * num2
          };
          serveFile(res, 'results.html', results);
        });
        break;
    }
  })
  .listen(8080, err => {
    console.log('Server running at http://127.0.0.1:8080/...');
  });

async function serveFile(res, fileName, keyPairs) {
  console.log(`Serving ${fileName}...`);
  let content = await fs.readFile(fileName, 'utf-8');

  if (keyPairs) {
    for (const keyName of Object.keys(keyPairs)) {
      content = content.replace(
        new RegExp(`{${keyName}}`, 'g'),
        keyPairs[keyName]
      );
    }
  }

  reply(res, 200, 'text/html', content);
}

function reply(res, status, contentType, content) {
  res.writeHead(status, { 'Content-Type': contentType });
  res.end(content, 'utf-8');
}
