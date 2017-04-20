app.factory('userFactory', ['$http', function($http){

  var users = [];
  var user = {};
  var factory = {};

  factory.index = function(callback) {
    $http.get('/')
    .then(function(returned_data){
      if(typeof(callback) == 'function'){
        callback(returned_data);
      }
    })
  }

  factory.login = function(user, callback){
    $http.post('/users', user)
    .then(function(returned_data){
      if(typeof(callback)== 'function'){
        callback(returned_data);
        if(returned_data.errors){
          console.log('ERRORS: ', returned_data.data);
        } else {console.log('returned data: ', returned_data);}
      }
    })
  }

  factory.show = function(uid, callback){
    $http.get('/users/' + uid)
    .then(function(returned_data){
      if(typeof(callback) == 'function'){
        callback(returned_data);
      }
    })
  }

  return factory;
}])
