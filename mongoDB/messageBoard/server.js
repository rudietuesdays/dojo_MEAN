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
mongoose.connect("mongodb://localhost/dojoMessageBoard")

// create dbs
var Schema = mongoose.Schema;

var MessageSchema = new Schema({
  name: {type: String, required: true, minlength: 3},
  content: {type: String, required: true},
  comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, {timestamps:true})

var CommentSchema = new Schema({
  name: {type: String, required: true, minlength: 3},
  content: {type: String, required: true},
  _message: {type: Schema.Types.ObjectId, ref: 'Message'}
}, {timestamps:true})

//setters
mongoose.model('Message', MessageSchema);
mongoose.model('Comment', CommentSchema);

//getters
var Message = mongoose.model('Message');
var Comments = mongoose.model('Comment');

// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// root route to render the index.ejs view
app.get('/', function(req, res) {
  Message.find({})
  .populate('comments')
  .exec(function(err, messages){
    if(err){console.log(err);}
    res.render("index", {messages});
  })
})
app.post('/message', function(req, res) {
  Message.create(
    {name: req.body.name, content: req.body.content},
    function(err){
    if (err){ console.log(err); };
  })
  res.redirect("/");
})
app.post('/comment/:id', function(req, res) {
  Message.findOne({_id: req.params.id}, (err, message) =>{
      if (err) {console.log(err);}
      Comments.create(
        {name: req.body.name, content: req.body.content, _message: message._id},
        (err, comment) => {
          if(err){console.log(err);}
          else {
            message.comments.push(comment);
            message.save();
            console.log('comment created');
         }
          res.redirect("/");
        }
      )
  })
})
// tell the express app to listen on port 8000
var server = app.listen(8000, function() {
  console.log("listening on port 8000");
})
