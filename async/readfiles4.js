const fs = require('fs-extra');

const readAllFiles = async () => {
  let lines = [];

  try {
    lines.push(await fs.readFile('1.txt'));
    lines.push(await fs.readFile('2.txt'));
    lines.push(await fs.readFile('3.txt'));
    lines.push(await fs.readFile('4.txt'));
    lines.push(await fs.readFile('5.txt'));
    console.log(lines.join('\n'));
  } catch (err) {
    console.log(`Error! ${err}`);
  }
}

readAllFiles();