var mongoose = require('mongoose');

//getters
var Panda = mongoose.model('Panda');

module.exports = {
  index: function(req, res) {
    Panda.find({})
    .exec(function(err, pandas){
      if(err){console.log(err);}
      res.json(pandas);
    })
  },

  create: function(req, res){
    var panda = new Panda(req.body);
    panda.save(
      function(err, panda){
        if (err){
          console.log(err);
        }
        res.json(panda);
      }
    )
  },

  update: function(req, res){
    Panda.update({_id: req.params.id}, {name: req.body.name}, function(err, result){
      if (err) { console.log(err); }
      res.json(result);
    });
  },

  show: function(req, res){
    Panda.findOne({_id: req.params.id},
    function(err, panda){
      if(err){console.log(err);}
      res.json(panda);
    })
  },

  delete: function(req, res){
    Panda.remove({_id: req.params.id}, function(err, result){
      if (err) { console.log(err); }
      res.json(result);
    })
  }
}
