const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let lastGreeting = 'None';
let stats = undefined;

try {
  stats = fs.statSync('message.txt');
} catch (error) {
  stats = undefined;
}

if (typeof stats != 'undefined') {
  lastGreeting = fs.readFileSync('message.txt');
}

console.log(`My last greeting was to "${lastGreeting}"`);

rl.question(`What's your name? `, (answer) => {

  console.log(`Well hello there, ${answer}!`);

  fs.writeFile('message.txt', answer, (err) => {
    if (err) throw err;
    rl.close();
  });
});