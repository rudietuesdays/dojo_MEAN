// require express
var express = require("express");
// create the express app
var app = express();
// require body-parser
var bp = require('body-parser');
//use body-parser
app.use(bp.json());
// require path
var path = require("path");
// set an environment variable called APPROOT to keep track of the root folder of your app
process.env['APPROOT'] = __dirname;
// follow path to set up static content
app.use(express.static(path.join(process.env['APPROOT'], "client")));
app.use(express.static(path.join(process.env['APPROOT'], "bower_components")));

// setting up our views folder
app.set('views', path.join(process.env['APPROOT'], './views'));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

// tell the express app to listen on port 8000
var server = app.listen(8000, function() {
  console.log("listening on port 8000");
})
