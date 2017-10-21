
//引入包
var session=require('express-session');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var session=require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//设置路由路径
var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// 设置视图类型
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser("An"));
app.use(session({
        secret:'an',
        resave:false,
        saveUninitialized:true
 }));

app.use(express.static(path.join(__dirname, 'public')));

//设置路由
app.use('/', index);
app.use('/users', users);

// 设置404
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
