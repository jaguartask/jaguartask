var mongoose = require('mongoose');

var taskSchema = new mongoose.Schema({

  title: {
    type: String,
    required: true
  },

  notes: {
    type: String,
    required: false
  },

  done:{
    type: Boolean,
    required:true
  },

  created:{
    type: Date,
    required: true
  },

  dueDate:{
    type: Date,
    required: false
  },

  priority:{
    type: String,
    required: true
  },

  user:{
    type: Array,
    required: true
  },

  lists:{
    type: Array,
    required:true
  }
});


module.exports = mongoose.model('task', taskSchema);
