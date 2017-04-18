var friends = require('../controllers/friends.js');

console.log('loading routes...');
module.exports = function(app){
  app.get('/friends', friends.index);
  // app.get('/friends/new', friends.new);
  app.post('/friends', friends.create);
  app.get('/friends/:id', friends.show);
  // app.get('/friends/edit/:id', friends.edit);
  app.put('/friends/:id', friends.update);
  app.delete('/friends/:id', friends.delete);
}
