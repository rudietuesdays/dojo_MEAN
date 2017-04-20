var mongoose = require('mongoose');
var Message = mongoose.model('Message');
var User = mongoose.model('User');

console.log('loading messages controller...');

module.exports = {
  create: function(req, res) {
    console.log('in message create fx');
    User.findOne({_id: req.params.id}, (err, user) => {
      if (err) {console.log(err);}
      var message = new Message({_user: user.id, content: req.body.content});
      message.save(
        (err, message) => {
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
            user.messages.push(message);
            user.save();
            console.log('message created', user);
            res.json(message);
          }
        }
      )
    })
  },
  show: function(req, res) {
    Message.find({})
    .populate('comments')
    .populate('_user')
    .exec(function(err, messages){
      if(err){console.log(err);}
      res.json({messages});
    });
  },
}
