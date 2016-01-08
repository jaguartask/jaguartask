var User = require('./userModel.js');
var Promise = require('bluebird');

module.exports = {
  signin: function(req, res, next){
    console.log(req);
    var username = req.body.username;
    var password = req.body.password;

    var findUser = promise.bind(User.findOne, User);
  },

  signup: function(req, res, next){
    // console.log(req);
    var username = req.body.username;
    var password = req.body.password;
    var newUser;
    User.findOne(username).exec()
     .then(function(user) {
       if (user) {
         console.log('userExists');
         console.log(user);
       } else { 
         newUser = {
           username: username,
           password: password
         };
         var user = User(newUser).save();
      }
     })
      .then(null, function(err) {
        res.send(200);
      })
      // .then(function(user) {
      //   if(user) {
      //     console.log('user Exist');
      //   } else {
      //     console.log(user);
      //   }
      // }):w
      // :
      // .catch(function(err) {
      //   console.log(err);
      // })
  }
};
