var pandas = require('../controllers/pandas.js');

module.exports = function(app){
  app.get('/', function(req, res) {
    pandas.index(req, res);
  });
  app.get('/pandas/new', function(req,res){
    pandas.new(req, res);
  });
  app.post('/pandas', function(req, res){
    pandas.create(req, res);
  });
  app.get('/pandas/:id', function(req, res){
    pandas.show(req, res);
  });
  app.get('/pandas/edit/:id', function(req, res){
    pandas.edit(req, res);
  });
  app.post('/pandas/:id', function(req, res){
    pandas.update(req, res);
  });
  app.delete('/pandas/:id', function(req, res){
    pandas.delete(req, res);
  });

}
