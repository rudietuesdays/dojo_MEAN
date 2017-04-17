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
// follow path to set up static content
app.use(express.static(path.join(__dirname, "client")));
app.use(express.static(path.join(__dirname, "bower_components")));

// setting up our views folder
app.set('views', path.join(__dirname, './views'));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

// tell the express app to listen on port 8000
var server = app.listen(8000, function() {
  console.log("listening on port 8000");
})
