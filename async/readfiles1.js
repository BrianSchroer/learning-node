const fs = require('fs');

let lines = [];

fs.readFile('1.txt', (err, data) => {
  if (err) throw (err);
  lines.push(data);
  fs.readFile('2.txt', (err, data) => {
    if (err) throw (err);
    lines.push(data);
    fs.readFile('3.txt', (err, data) => {
      if (err) throw (err);
      lines.push(data);
      fs.readFile('4.txt', (err, data) => {
        if (err) throw (err);
        lines.push(data);
        fs.readFile('5.txt', (err, data) => {
          if (err) throw (err);
          lines.push(data);
          console.log(lines.join('\n'));
        });
      });
    });
  });
});
