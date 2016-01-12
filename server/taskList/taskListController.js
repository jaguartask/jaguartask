var List = require('./taskListModel.js');
var Task = require('../task/taskModel.js');

module.exports = {

  save: function(req, res, next){
  },

  get: function(req, res, next){
    Task.find({}).exec()
      .then(function(user) {
        res.json(user)
      });
  },


};
