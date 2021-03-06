// require express and path
var express = require("express");
var path = require("path");
// create the express app
var app = express();
// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// root route to render the index.ejs view
app.get('/', function(req, res) {
 res.render("index");
})
// tell the express app to listen on port 8000
var server = app.listen(8000, function() {
 console.log("listening on port 8000");
})
// start sockets *after* creating var server bc server is a parameter!
var io = require('socket.io').listen(server)
// connect your sockets
io.sockets.on('connection', function(socket){
  socket.on('submittedForm', function(data){
    console.log("socket.id is", socket.id);
    console.log(data);
    var random_number = Math.floor((Math.random() * 1000) + 1);
    socket.emit('sentData', {data});
    socket.emit('random_number', {response: random_number});
  })
})
