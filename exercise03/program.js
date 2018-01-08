const fs = require('fs');

const fileName = process.argv[2];

if (!fs.existsSync(fileName)) {
  console.log(`File not found: "${fileName}"`);
  return;
}

let lineCount = 0;

try {
  const buffer = fs.readFileSync(fileName);
  lineCount = buffer.toString().split('\n').length - 1;
} catch (err) {
  console.log(err);
}

console.log(lineCount);