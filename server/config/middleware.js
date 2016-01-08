var morgan = require('morgan');
var bodyParser = require('body-parser');
var helpers = require('./utils.js');


module.exports = function(app, express){
  var userRouter = express.Router();
  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(express.static(__dirname + '/../../client'));

  app.use(helpers.errorLogger);
  app.use(helpers.errorHandler);

  app.post('/', function(req, res) {
    res.json({loggedin: true})
  })

  // require('../users/userRoutes.js')(userRouter);

};
