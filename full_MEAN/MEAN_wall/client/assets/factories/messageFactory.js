app.factory('messageFactory', ['$http', function($http){

  var messages = [];
  var message = {};
  var factory = {};

  factory.show = function(callback){
    $http.get('/messages')
    .then(function(returned_data){
      if(typeof(callback) == 'function'){
        callback(returned_data);
        // console.log(returned_data);
      }
    })
  };

  factory.create = function(id, newMessage, callback){
    // console.log(newMessage);
    $http.post('/'+id+'/messages', newMessage)
    .then(function(returned_data){
      if(typeof(callback) == 'function'){
        callback(returned_data);
        // console.log(returned_data);
      }
    })
  }

  return factory;
}])
