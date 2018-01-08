const fs = require('fs');
const path = require('path');

const directoryName = process.argv[2] || process.cwd();
const extension = getExtension();

fs.readdir(directoryName, 'utf8', (err, files) => {
  if (err) {
    if (err.code === 'ENOENT') {
      console.log(`Directory not found: "${directoryName}"`);
      return;
    }

    throw err;
  }

  files
    .filter(file => path.extname(file) === extension)
    .forEach(file => console.log(file));
});

function getExtension() {
  const extension = process.argv[3] || 'js';
  return (extension.startsWith('.')) ? extension : `.${extension}`;
}
