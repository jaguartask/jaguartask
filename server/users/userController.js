var User = require('./userModel.js');
var promise = require('bluebird');

module.exports = {
  signin: function(req, res, next){
    console.log(req);
    var username = req.body.username;
    var password = req.body.password;

    var findUser = promise.bind(User.findOne, User);
  },

  signup: function(req, res, next){
    console.log(req);
    var username = req.body.username;
    var password = req.body.password;
    var create;
    var newUser;

    var findUser = promise.bind(User.findUser, User);

    create = promise.bind(User.create, User);

    newUser = {
      username: username,
      password: password
    };
    return create(newUser);
  }
};
