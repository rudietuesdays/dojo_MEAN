var mongoose = require('mongoose');
var Order = mongoose.model('Order')

console.log('loading orders controller...');

module.exports = {
  create: function(req, res) {
    console.log("inside orders create fx")
    Customer.findOne({ name: req.body.customer.name }, function(err, customer) {
      Product.findOne({ name: req.body.product.name}, function(err, product) {
        var order = new Order(req.body);
        order.save(function(err, order) {
          if (err) { res.json(err); }
          else { res.json(product) }
        })
      })
    })
  }
}
