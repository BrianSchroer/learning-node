const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/form.html`);
});

app.post('*', (req, res) => {
  const { body } = req;
  const num1 = parseInt(body.num1);
  const num2 = parseInt(body.num2);
  const results = {
    num1,
    num2,
    add: num1 + num2,
    sub: num1 - num2,
    div: num1 / num2,
    mul: num1 * num2
  };
  res.render(`${__dirname}/results.ejs`, results);
});

app.listen(8080, err => {
  console.log('Express running at http://127.0.0.1:8080/...');
});
