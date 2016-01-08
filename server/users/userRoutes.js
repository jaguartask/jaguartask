var userController = require('./userController.js');

module.exports = function(app) {

  console.log(app);
  app.post('/signup', userController.signup);

};
