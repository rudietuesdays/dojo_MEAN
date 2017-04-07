// Load the express module
var express = require("express");
// require body-parser
var bodyParser = require('body-parser');
// load the session module
var session = require('express-session');
// invoke var express and store the resulting application in var app
var app = express();
// use body-parser to support JSON-encoded bodies
app.use( bodyParser.json() );  
// use body-parser to support URL-encoded bodies
app.use(bodyParser.urlencoded({extended: true}));
// use express-session
app.use(session({secret: 'codingdojorocks'}));  // string for encryption

//root route
app.get('/', function(req, res){
  // console.log(app, req, res);
  // res.send("hello express");
  res.render('index')
})
//show all users
app.get("/users", function (request, response){
    // hard-coded user data
    var users_array = [
        {name: "Micha", email: "micha@codingdojo.com"},
        {name: "Jay", email: "jay@codingdojo.com"},
        {name: "Bree", email: "bree@codingdojo.com"},
        {name: "Anne", email: "anne@codingdojo.com"}
    ];
    response.render('users', {users: users_array});
})
//show the information for a specific user
app.get("/users/:id", function (req, res){
    console.log("The user id requested is:", req.params.id);
    // just to illustrate that req.params is usable here:
    res.send("You requested the user with id: " + req.params.id);
    // code to get user from db goes here, etc...
});
// route to process new user form data:
app.post('/users', function (req, res){
    req.session.name = req.body.name;
    console.log("SESSION DATA \n\n", req.session.name);
    console.log('*****');
    console.log("POST DATA \n\n", req.body)
    //code to add user to db goes here!
    // redirect the user back to the root route.
    res.redirect('/')
});

// this is the line that tells our server to use the "/static" folder for static content
app.use(express.static(__dirname + "/static"));
// This sets the location where express will look for the ejs views
app.set('views', __dirname + '/views');
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');

// Tell the express app to listen on port 8000
app.listen(8000, function(){
  console.log('listening on 8000');
})
// this line will almost always be at the end of your server.js file (we only tell the server to listen after we have set up all of our rules)
