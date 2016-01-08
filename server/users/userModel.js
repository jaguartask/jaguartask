var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    //For test purposes will change back to ***true***
    required: false
  },
});


module.exports = mongoose.model('users', UserSchema);
