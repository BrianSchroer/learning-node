const seedrandom = require('seedrandom');

const rng = seedrandom();

const randomNumber = Math.ceil(rng() * 10);

console.log(randomNumber);