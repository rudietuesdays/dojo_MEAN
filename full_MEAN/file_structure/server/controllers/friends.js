var mongoose = require('mongoose');

//getters
var Friend = mongoose.model('Friend');

console.log('loading friends controller...');
module.exports = {
  index: function(req, res) {
    Friend.find({})
    .exec(function(err, friends){
      if(err){console.log(err);}
      res.json(friends);
    })
  },

  create: function(req, res){
    var friend = new Friend(req.body);
    friend.save(
      function(err, friend){
        if (err){
          console.log(err);
        }
        res.json(friend);
      }
    )
  },

  update: function(req, res){
    Friend.update({_id: req.params.id}, {name: req.body.name}, function(err, result){
      if (err) { console.log(err); }
      res.json(result);
    });
  },

  show: function(req, res){
    Friend.findOne({_id: req.params.id},
    function(err, friend){
      if(err){console.log(err);}
      res.json(friend);
    })
  },

  delete: function(req, res){
    Friend.remove({_id: req.params.id}, function(err, result){
      if (err) { console.log(err); }
      res.json(result);
    })
  }
}
