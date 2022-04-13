var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//Using Scehmas to handle post and get request _____________________________________________________________________________________________
var Blogbit = require('./models/blogbit');
var Bookbit = require('./models/bookbit');
var Thread = require('./models/threads');
var Snipod = require('./models/snipod');

//Connecting with database _____________________________________________________________________________________________
var db = require('./db/index');
//___________________________________________________________________________________________

var blogRouter = require("./routes/blogRoute")
var cors = require('cors');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/compose', blogRouter);

app.post('/composebit', async (req, res) => {
  titl = req.body.title;
  cont = req.body.content;
  try {
    Blogbit.insertMany({title: titl, content: cont}, (err, data)=>{
      if (err) {
        console.log(err);
      }
    })
  } catch (err) {
    console.log(err);
  }
})

app.use('/', blogRouter);

db.on('error', console.error.bind(console, 'MongoDB connection error:'))





// _______________________________________________________________________________________________________________
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
