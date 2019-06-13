var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var session = require('express-session');
var bodyParser = require('body-parser');
var http = require('http').Server(app);
var io = require('socket.io')(http);

var dashboardRouter = require('./routes/dashboard');
var publicRouter = require('./routes/public');

var app = express();
global.access = false;
global.username = "Master";
global.password = "arvind123";
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'lakjdlskjlsnflnlfkflanlkejlkfjeyugaythomyuangchandyuhidpauyuabarvr',
  resave: true,
  saveUninitialized: false
}));


function loginRequired(req, res, next) {
  console.log("In loginRequired");
  console.log(global.access);
  if (!global.access) {
    return res.status(401).render("unauthenticated");
  }

  next();
}

app.use('/',publicRouter);
app.use('/dashboard',loginRequired,dashboardRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
