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
  dueDate:{
    type: Date,
    required: false
  },
  priority:{
    type: String,
    required: false
  },
  user:{
    type: Array,
    required: true
  },
  lists:{
    type: Array,
    required: false
  }
}, {timestamp : {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});


module.exports = mongoose.model('task', taskSchema);
