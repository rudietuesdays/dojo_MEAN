// require mongoose
var mongoose = require("mongoose");
// import the Model 'Quote' that we've created
var Quote = mongoose.model('Quote');
// require the quotes controller
var quotes = require('../controllers/quotes.js');

module.exports = function(app){
  app.get('/', function(req, res) {
    res.render("index");
  })
  app.post('/quotes', function(req, res) {
    quotes.create(req, res)
  })
  app.get('/quotes', function(req, res) {
    quotes.show(req, res)
  })
}