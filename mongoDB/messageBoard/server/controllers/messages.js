var mongoose = require("mongoose");
var Message = mongoose.model('Message');

module.exports = {
  index: function(req, res) {
    Message.find({})
    .populate('comments')
    .exec(function(err, messages){
      if(err){console.log(err);}
      res.render("index", {messages});
    });
  },
  create: function(req, res) {
    Message.create(
      {name: req.body.name, content: req.body.content},
      function(err){
      if (err){ console.log(err); };
    })
    res.redirect("/");
  },
}
