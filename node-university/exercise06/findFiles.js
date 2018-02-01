const fs = require('fs');
const path = require('path');

function formatExtension(extension) {
  const ext = extension || '.js';
  return (ext.startsWith('.')) ? ext : `.${ext}`;
}

module.exports = (directoryName, extension, callback) => {
  let error = null;
  const ext = formatExtension(extension);

  fs.readdir(directoryName, 'utf8', (err, files) => {
    if (err) {
      return callback(err);
    }

    callback(null, files.filter(file => path.extname(file) === ext));
  });
};