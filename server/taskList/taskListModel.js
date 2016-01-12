var mongoose = require('mongoose');

var taskListSchema = new mongoose.Schema({

  tasks: {
   type: Array,
   required: false,
  },

  title: {
    type: String,
    required: true,
  }

});

module.exports = mongoose.model('taskList', taskListSchema);
