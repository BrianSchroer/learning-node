const fs = require('fs');

const fileName = process.argv[2];

if (!fs.existsSync(fileName)) {
  console.log(`File not found: "${fileName}"`);
  return;
}

try {
  const buffer = fs.readFileSync(fileName);
  const lineCount = buffer.toString().split('\n').length - 1;
  console.log(lineCount);
} catch (err) {
  console.log(err);
}