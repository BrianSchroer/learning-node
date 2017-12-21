const readline = require('readline');
const fs = require('fs');

exports.getChuckNorrisFact = (callback) => {
  let chuckCounter = 0

  const chuckLine = Math.floor(Math.random() * (86)) + 1;

  const rl = readline.createInterface({
    input: fs.createReadStream('chuck.txt')
  });

  rl.on('line', (line) => {
    if (chuckCounter == chuckLine) {
      callback(`#${chuckLine}: ${line}`);
    }

    chuckCounter++;
  });
}