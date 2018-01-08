const math = require('./math');

exports.increment = function (num) {
  return math.add(num, 1);
}
