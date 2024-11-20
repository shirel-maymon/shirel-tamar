var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var LogIn = require('./routes/LogIn')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var register = require('./routes/register')
var app = express();
const cors = require("cors");
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/logIn', LogIn);
app.use('/register', register)
app.use('/', indexRouter);
// app.use('/users', usersRouter);

module.exports = app;
