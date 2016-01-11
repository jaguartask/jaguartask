var Task = require('./taskModel.js');
var User = require('../users/userModel.js');
var List = require('../taskList/taskListModel.js');


module.exports = {

  get: function(req, res, next){

  },

  save: function(req, res, next){

    var task = new Task({
      user: req.body.username,
      title: req.body.title,
      // notes: req.body.notes,
      done: req.body.done,
      // dueDate: req.body.dueDate,
      // priority: req.body.priority
    })
    .save()
      .then(function(result) {
        console.log('result :', result);
      })
      .then(null, function(err) {
        console.log("err");
      });
  },

  delete: function(req, res, next){

  },

};
