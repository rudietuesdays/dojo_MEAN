var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');

console.log('loading customers controler...');

module.exports = {
  create: function(req, res){
    console.log('in create customer function');
    Customer.findOne({name: req.body.name}, function(err, customer){
      if (customer) {
        console.log('customer found in db: ', customer);
        res.json({_id: customer._id});
      } else {
        var customer = new Customer(req.body);
        // console.log('customer: ', customer);
        customer.save(
          function(err, customer){
            if (err){
              res.json(err);
            } else {res.json(customer)}
          }
        )
      }
    })
  },


}
