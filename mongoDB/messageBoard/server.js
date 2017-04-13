// require express
var express = require("express");
// create the express app
var app = express();
// require body-parser
var bp = require('body-parser');
//use body-parser
app.use(bp.urlencoded({extended: true}));
// require path
var path = require("path");
// follow path to set up static content
app.use(express.static(path.join(__dirname, "./client/static")));
// require mongoose
var mongoose = require("mongoose");
// Use native promises
mongoose.Promise = global.Promise;


// setting up ejs and our views folder
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

// connect to db in mongoose.js
require('./server/config/mongoose.js');
// routes in routes.js // remember we set the export to be a fx that takes an app as a parameter!
require('./server/config/routes.js')(app);


// tell the express app to listen on port 8000
var server = app.listen(8000, function() {
  console.log("listening on port 8000");
})
