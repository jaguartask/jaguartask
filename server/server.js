var express = require('express');
var mongoose = require('mongoose');
var app = express();
var port = process.env.PORT || 8000;

mongoose.connect('mongodb://jtask:jtask@ds039195.mongolab.com:39195/heroku_17rn0482');

require('./config/middleware.js')(app, express);

app.listen(port);

module.exports = app;
