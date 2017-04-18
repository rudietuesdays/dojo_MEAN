var users = require('../controllers/users.js')

console.log('loading routes...');
module.exports = function(app){
  // app.get('/', users.index);
  // app.get('/friends/new', friends.new);
  app.post('/users', users.create);
  // app.get('/friends/:id', friends.show);
  // app.get('/friends/edit/:id', friends.edit);
  // app.put('/friends/:id', friends.update);
  // app.delete('/friends/:id', friends.delete);

  app.post('/login', users.login);
}
