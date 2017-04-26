var mongoose = require('mongoose');
var Product = mongoose.model('Product');

console.log('loading products controller...');

module.exports = {
  index: function(req, res){
    console.log('in product index fx');
    Product.find({})
    .exec(function(err, products){
      if(err){console.log(err);}
      res.json({products});
    });
  },

  create: function(req, res){
    console.log('in create product function');
    var product = new Product(req.body);
    // console.log('product: ', product);
    product.save(
      function(err, product){
        if (err){
          res.json(err);
        } else {res.json(product)}
      }
    )
  },

}
