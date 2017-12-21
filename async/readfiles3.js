const fs = require('fs');

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

const readAllFiles = async () => {
  let lines = [];

  try {
    lines.push(await readFilePromise('1.txt'));
    lines.push(await readFilePromise('2.txt'));
    lines.push(await readFilePromise('3.txt'));
    lines.push(await readFilePromise('4.txt'));
    lines.push(await readFilePromise('5.txt'));
    console.log(lines.join('\n'));
  } catch (err) {
    console.log(`Error! ${err}`);
  }
}

readAllFiles();