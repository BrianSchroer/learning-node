const readline = require('readline');
const fs = require('fs');

let chuckCounter = 0;
let chuckLine = 0;
let chuckLines = 85;

if (fs.existsSync('chuckcounter.txt')) {
  chuckLine = parseInt(fs.readFileSync('chuckcounter.txt'));
  chuckLine = (chuckLine >= chuckLines) ? 0 : chuckLine + 1;
}

const rl = readline.createInterface({
  input: fs.createReadStream('chuck.txt')
});

rl.on('line', (line) => {
  if (chuckCounter == chuckLine) {
    fs.writeFileSync('chuckcounter.txt', chuckLine);
    console.log(`#${chuckLine}: ${line}`);
  }

  chuckCounter++;
});
