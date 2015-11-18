var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
var teams = require('./routes/teams');
var tasks = require('./routes/tasks');
var projects = require('./routes/projects');
var util = require('./util');
var app = express();
// var expressJwt = require('express-jwt');

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Client Route
app.use(express.static(path.join(__dirname, '/client')));
// app.use(expressJwt({ secret: 'secret' }));

// Controllers
app.use('/api', routes);
app.use('/api/users', users);
app.use('/api/teams', teams);
app.use('/api/tasks', util.decode);
app.use('/api/tasks', tasks);
app.use('/api/projects', projects);

// TODO refactor into a controller
// TODO remove this
// checkAuth = util.checkAuth;

module.exports = app;
