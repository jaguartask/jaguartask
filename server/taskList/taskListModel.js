var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var taskListSchema = new mongoose.Schema({

  taskId: [{type: Schema.Types.ObjectId, ref: 'task'}],

  title:{
    type: String,
    required: true
  }

});

module.exports = mongoose.model('lists', taskListSchema);
