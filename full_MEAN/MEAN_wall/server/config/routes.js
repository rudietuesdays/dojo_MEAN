var users = require('../controllers/users.js');
var messages = require('../controllers/messages.js');
var comments = require('../controllers/comments.js');

// make sure file is properly required
console.log('loading routes...');

module.exports = function(app){
  // user routes
  app.post('/users', users.create);
  app.get('/users/:id', users.show);

  // message routes
  app.post('/:id/messages', messages.create);
  app.get('/messages', messages.show);

  // comment routes
  app.post('/messages/:id/comment', comments.create);
  app.get('/comments', comments.show)
}
