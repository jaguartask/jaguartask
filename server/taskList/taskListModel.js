var mongoose = require('mongoose');

var taskListSchema = new mongoose.Schema({

  listId:{
    type: Array,
    required: true
  },

  title:{
    type: String,
    required: true
  }


});
