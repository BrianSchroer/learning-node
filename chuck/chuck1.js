const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: fs.createReadStream('chuck.txt')
});

rl.on('line', (line) => {
  console.log(line);
});
