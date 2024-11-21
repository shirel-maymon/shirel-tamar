var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var LogIn = require('./routes/LogIn')
var showFile =require('./routes/showFile')

var register = require('./routes/register')
var home = require('./routes/home')
var app = express();
var showFolder = require('./routes/showFolder')
const cors = require("cors");
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/logIn', LogIn);
app.use('/register', register)
app.use('/home', home)
app.use('/showFile', showFile)
app.use('/showFolder', showFolder)

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

module.exports = app;
