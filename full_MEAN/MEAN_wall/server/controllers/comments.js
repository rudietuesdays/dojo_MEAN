var mongoose = require('mongoose');
var Comments = mongoose.model('Comments');
var Message = mongoose.model('Message')

console.log('loading comments controller...');

module.exports = {
  create: (req, res) => {
    Message.findOne({_id: req.params.id}, (err, message) =>{
      if (err) {console.log(err);}
      Comments.create(
        req.body,
        (err, comment) => {
          if(err){
            console.log(err);
            res.json({
              errors: {
                message: 'message cannot be blank',
                kind: 'what did not work',
                path: 'user login',
                value: 'password error'
              }
            });
          }
          else {
            message.comments.push(comment);
            message.save();
            console.log('comment created');
          }
          res.json(comment);
        }
      )
    })
  },

  show: function(req, res) {
    Comments.find({})
    .populate('_user')
    .exec(function(err, comments){
      if(err){console.log(err);}
      res.json({comments});
    });
  },

}
