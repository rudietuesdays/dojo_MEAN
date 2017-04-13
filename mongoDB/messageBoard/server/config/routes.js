// require controller files
var messages = require('../controllers/messages.js')
var comments = require('../controllers/comments.js')

module.exports = function(app){
  // root route to render the index.ejs view
  app.get('/', function(req, res) {
    messages.index(req, res)
  })

  //route to create a new message
  app.post('/message', function(req, res) {
    messages.create(req, res)
  })

  // route to create a new comment
  app.post('/comment/:id', function(req, res) {
    comments.create(req, res)
  })
}
