var User = require('./userModel.js');
var promise = require('bluebird');




module.exports = {
  signin: function(req, res, next){
    var username = req.body.username;
    var password = req.body.password;

    var findUser = promise.bind(User.findOne, User);
  }
};
