var mongoose = require('mongoose');
var User = mongoose.model('User');

console.log('loading users controller...');

module.exports = {
  // index: function(req, res){
  //
  // },

  login: function(req, res){
    console.log('in login function');
    User.findOne({email: req.body.email}, function(err, user){
      if(!req.body.password){
        res.json({
          errors: {
            login: {
              message: 'invalid email or password',
              kind: 'what did not work',
              path: 'user login',
              value: 'password error'
            }
          }
        });
      } else if (user && user.validPassword(req.body.password)) {
        console.log('user found in db: ', user);
        res.json({_id: user._id});
      } else {
        console.log('what u got', user);
        res.json({
          errors: {
            login: {
              message: 'invalid email or password',
              kind: 'what did not work',
              path: 'user login',
              value: 'password error'
            }
          }
        });
      }
    })
  },

  create: function(req, res){
    var user = new User(req.body);
    user.save(
      function(err, user){
        if (err){
          console.log(err);
          res.json(err);
        } else {res.json(user)}
      }
    )
  }
}
