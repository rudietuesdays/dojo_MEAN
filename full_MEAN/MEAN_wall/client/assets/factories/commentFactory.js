app.factory('commentFactory', ['$http', function($http){

  var comments = [];
  var comment = {};
  var factory = {};

  factory.show = function(callback){
    $http.get('/comments')
    .then(function(returned_data){
      if(typeof(callback) == 'function'){
        callback(returned_data);
        // console.log(returned_data);
      }
    })
  };

  factory.create = function(message_id, user_id, newComment, callback){
    console.log('comment obj: ', newComment);
    $http.post('/messages/'+message_id+'/comment', newComment)
    .then(function(returned_data){
      if(typeof(callback) == 'function'){
        callback(returned_data);
        // console.log(returned_data);
      }
    })
  }

  return factory;
}])
