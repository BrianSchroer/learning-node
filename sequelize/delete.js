const model = require('./model');

const User = model.User;

(async () => {
  await User.destroy({
    where: { name: 'Bob' }
  });
})();
