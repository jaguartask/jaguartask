var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;


var UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    index: {unique: true}
  },

  password: {
    type: String,
    required: true
  },
});

UserSchema.pre('save', function(next) {
  var user = this;

  if(!user.isModified('password')) return next();

  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt){
    bcrypt.hash(user.password, salt, function(err, hash) {
      if(err) return next(err);
      user.password = hash;
      user.salt = salt;
      console.log(salt);
      console.log(hash);
      next();
    });
  });
});

  UserSchema.methods.comparePassword = function(canadidtatePassword, cb){
    bcrypt.compare(canadidtatePassword, this.password, function(err, isMatch){
      if(err) return cb(err);
      cb(null, isMatch);
    });
  };

module.exports = mongoose.model('users', UserSchema);
