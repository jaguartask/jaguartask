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
      // lists: req.body.listId
      // dueDate: req.body.dueDate,
      // priority: req.body.priority
      // list: id
    })
      .save()
      .then(function(task) {
        var result = [];
        return List.findOne({title: req.body.listTitle}).exec()
          .then(function(list) {
            return [task, list];
          });
      })
      .then(function(result) {
       if(!result[1]) {
         new List({title: req.body.listTitle})
           .save()
           .then(function(res) {
            var id = result[0]._id;
            res.tasks.push(id)
            res.save()
           })
           .then(null, function(err) {
            console.log(err.toJSON());
             })
         } else {
           var id = result[0]._id;
           result[1].tasks.push(id)
           result[1].save()
          }
         return result;
        })
        .then(function(result) {
          console.log(result);
          result[0].lists.push(result[1]._id);
          result[0].save();
          res.json({taskIsSaved: true});
        })
        .then(null, function(err) {
          console.log("err :", err);
        });
    },

  delete: function(req, res, next){

  },

};
