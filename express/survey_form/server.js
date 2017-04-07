// require express
var express = require("express");
// require body-parser
var bodyParser = require('body-parser');
// path module
var path = require("path");
// create the express app
var app = express();
// use body-parser to support JSON-encoded bodies
app.use( bodyParser.json() );
// use body-parser to support URL-encoded bodies
app.use(bodyParser.urlencoded({extended: true}));
// static content
app.use(express.static(path.join(__dirname, "./static")));

// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// root route to render the index.ejs view
app.get('/', function(req, res) {
 res.render("index");
})
// post route for adding a user
app.post('/result', function(req, res) {

  console.log("POST DATA: ", req.body.name);

  // This is where we would add the user to the database
  // Then redirect to the root route
 res.render("result", {user: req.body});
})
// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});
