const model = require('./model');

const User = model.User;

(async () => {
  await User.update(
    {
      space_invaders: 9999999
    },
    {
      where: { name: 'PJ' }
    }
  );
})();
