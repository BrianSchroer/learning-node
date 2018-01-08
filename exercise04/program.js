const fs = require('fs');

const fileName = process.argv[2];

fs.readFile(fileName, 'utf8', (err, fileContents) => { // utf8 tells readFile to return a string, not a buffer
  if (err) {
    if (err.code === 'ENOENT') {
      console.log(`File not found: "${fileName}"`);
      return;
    }

    throw err;
  }

  lineCount = fileContents.split('\n').length - 1;
  console.log(lineCount);
});