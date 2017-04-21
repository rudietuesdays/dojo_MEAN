app.factory('pandasFactory', ['$http', function($http){
  var factory = {};

  factory.index = function(callback){
    $http.get('/').then(function(returned_data){
      if(typeof(callback)== 'function'){
        callback(returned_data.data);
      }
    });
  }

  factory.show = function(id, callback){
    $http.get('/pandas/' + id).then(function(returned_data){
      if(typeof(callback)== 'function'){
        callback(returned_data.data);
      }
    });
  }

  factory.create = function(panda, callback){
    $http.post('/pandas', panda)
    .then(function(returned_data){
      if(typeof(callback)== 'function'){
        callback(returned_data.data);
      }
    });
  }

  factory.update = function(id, panda, callback){
    $http.put('/pandas/' + id, panda)
    .then(function(returned_data){
      if(typeof(callback)== 'function'){
        callback(returned_data.data);
      }
    });
  }

  factory.delete = function(id, callback){
    $http.delete('/pandas/' + id)
    .then(function(returned_data){
      if(typeof(callback)== 'function'){
        callback(returned_data.data);
      }
    });
  }

  return factory;
}])
