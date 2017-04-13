var mongoose = require("mongoose");

var Quote = mongoose.model('Quote');

module.exports = {
  show: function(req, res) {
    Quote.find({})
    .exec(function(err, quotes){
      if(err){console.log(err);}
      res.render("quotes", {quotes});
    })
  },

  create: function(req, res) {
    var quote = new Quote(req.body);
    quote.save(
      function(err){
      if (err){
        console.log(err);
        res.render('index', {title: 'you have errors!', errors: quote.errors})
      } else {
          res.redirect('/quotes');
        }
    })
  }
}
