var taskController = require('./taskController.js');

module.exports = function(app){
  app.post('/', taskController.save);

  app.get('/', taskController.get);

};
