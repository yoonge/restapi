var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
// var taskList = require('./routes/taskList');
// var taskListAll = require('./routes/taskListAll');
// var taskBasicInfo = require('./routes/taskBasicInfo');
// var riskRetrieval = require('./routes/riskRetrieval');
// var userList = require('./routes/userList');
// var wifiList = require('./routes/wifiList');
// var logList = require('./routes/logList');
// var onlineUserList = require('./routes/onlineUserList');
// var blockList = require('./routes/blockList');
var getUrl = require('./routes/getUrl');
var getUserInfo = require('./routes/getUserInfo');

var app = express();

// Allow CORS
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, No-Cache, X-Requested-With, If-Modified-Since, Pragma, Last-Modified, Cache-Control, Expires, Content-Type, X-E4M-With");
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  res.header("X-Powered-By", "Express")
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
// app.use('/taskList', taskList);
// app.use('/taskListAll', taskListAll);
// app.use('/taskBasicInfo', taskBasicInfo);
// app.use('/riskRetrieval', riskRetrieval);
// app.use('/userList', userList);
// app.use('/wifiList', wifiList);
// app.use('/logList', logList);
// app.use('/onlineUserList', onlineUserList);
// app.use('/blockList', blockList);
app.use('/getUrl', getUrl);
app.use('/getUserInfo', getUserInfo);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
