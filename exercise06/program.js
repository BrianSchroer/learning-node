const findFiles = require('./findFiles');

findFiles(process.argv[2], process.argv[3], (err, files) => {
  if (err) {
    throw err;
  }

  files.forEach(file => console.log(file));
});