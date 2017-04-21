var mongoose = require('mongoose');
var Product = mongoose.model('Product');

console.log('loading products controler...');

module.exports = {

  create: function(req, res) {
    console.log("inside products create fx")
    Product.findOne({ name: req.body.name }, function(err, product) {
      if (product) { res.json({ _id: product._id })
      } else {
        var product = new Product(req.body);
        product.save(function(err, product) {
          if (err) { res.json(err); }
          else { res.json(product) };
        })
      }
    })
  }
}
