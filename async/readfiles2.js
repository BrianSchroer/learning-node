const fs = require('fs');

let lines = [];

function readFilePromise(fileName) {
  return new Promise((resolve, reject) => {

    fs.readFile(fileName, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });

  });
}

readFilePromise('1.txt').then(data => {
  lines.push(data);
  return readFilePromise('2.txt');
}).then(data => {
  lines.push(data);
  return readFilePromise('3.txt');
}).then(data => {
  lines.push(data);
  return readFilePromise('4.txt');
}).then(data => {
  lines.push(data);
  return readFilePromise('5.txt');
}).then(data => {
  lines.push(data);
  console.log(lines.join('\n'));
}).catch(err => {
  console.log(`Error! ${err}`);
});
