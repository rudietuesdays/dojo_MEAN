var mongoose = require("mongoose");
var Message = mongoose.model('Message');
var Comments = mongoose.model('Comment')

module.exports = {
  create: function(req, res) {
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
  },
}
