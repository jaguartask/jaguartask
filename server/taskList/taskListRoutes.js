var taskListController = require('./taskListController.js');

module.exports = function(app) {

  app.post('/', taskListController.save);
  app.get('/', taskListController.get);
  

};
