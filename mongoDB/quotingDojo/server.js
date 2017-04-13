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
var mongoose = require("mongoose");
// Use native promises
// mongoose.Promise = global.Promise;
// connect mongoose to mongodb
mongoose.createConnection("mongodb://localhost/dojoMessageBoard")


// setting up ejs and our views folder
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

// require the mongoose configuration file which does the rest for us
require('./server/config/mongoose.js');

// store the routes.js function in a variable
var routes_setter = require('./server/config/routes.js');
// invoke the function stored in routes_setter and pass it the "app" variable
routes_setter(app);

// tell the express app to listen on port 8000
var server = app.listen(8000, function() {
  console.log("listening on port 8000");
})
