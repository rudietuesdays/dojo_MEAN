var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');

console.log('loading customers controller...');

module.exports = {
  index: function(req, res){
    console.log('in customer index fx');
    Customer.find({})
    .exec(function(err, customers){
      if(err){console.log(err);}
      res.json({customers});
    });
  },

  create: function(req, res){
    console.log('in create customer function');
    var customer = new Customer(req.body);
    // console.log('customer: ', customer);
    customer.save(
      function(err, customer){
        if (err){
          res.json(err);
        } else {res.json(customer)}
      }
    )
  },

  delete: function(req, res) {
    console.log('in delete customer fx');
    Customer.remove({_id: req.params.id}, function(err, result){
          if (err) { console.log(err); }
          console.log('customer deleted');
          res.json('customer deleted')
        })
  }


}
