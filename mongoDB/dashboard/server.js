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
app.use(express.static(path.join(__dirname, "./static")));
// require mongoose
var mongoose = require("mongoose");
// Use native promises
mongoose.Promise = global.Promise;
// connect mongoose to mongodb
mongoose.connect("mongodb://localhost/dojoMongooseDashboard")

// create dbs
var Schema = mongoose.Schema;

var pandaSchema = new Schema({
  name: {type: String, required: true, minlength: 3},
}, {timestamps:true})

//setters
mongoose.model('Panda', pandaSchema);

//getters
var Panda = mongoose.model('Panda');

// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// root route to render the index.ejs view
app.get('/', function(req, res) {
  Panda.find({})
  .exec(function(err, pandas){
    if(err){console.log(err);}
    res.render("index", {pandas});
  })
})
app.get('/pandas/new', function(req,res){

  res.render('new')
})
app.post('/pandas', function(req, res){
  var panda = new Panda(req.body);
  panda.save(
    function(err){
      if (err ){
        console.log(err);
        res.render('new', {title: 'you have errors!', errors: panda.errors})
      } else {
        res.redirect('/')
      }
    }
  )
})
app.get('/pandas/edit/:id', function(req, res){
  Panda.findOne({_id: req.params.id})
  .exec(function(err, panda){
    if(err){console.log(err);}
    res.render("edit", {panda});
  })
})
app.post('/pandas/:id', function(req, res){
  Panda.update({_id: req.params.id}, {name: req.body.name}, function(err, result){
    if (err) { console.log(err); }
    res.redirect('/');
  });
})
app.post('/pandas/destroy/:id', function(req, res){
  Panda.remove({_id: req.params.id}, function(err, result){
    if (err) { console.log(err); }
    res.redirect('/');
  })
})

// tell the express app to listen on port 8000
var server = app.listen(8000, function() {
  console.log("listening on port 8000");
})
