var customers = require('../controllers/customers.js')
var products = require('../controllers/products.js')
var orders = require('../controllers/orders.js')

module.exports = function(app){
  //customer routes
	app.post('/customers', customers.create);
	app.get('/customers', customers.index);
	// app.get('/users/:id', users.show)
	// app.put('/users/:id', users.update);
	app.delete('/customers/:id', customers.delete);

  //product routes
  app.get('/products', products.index);
  app.post('/products', products.create);
}
