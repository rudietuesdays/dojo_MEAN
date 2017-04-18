app.factory('friendFactory', ['$http', function($http) {
  var friends = [];
  var friend = {};
  var factory = {};
  factory.index = function(callback) {
      //call this method if you want to update or set the friends variable
      $http.get('/friends').then(function(returned_data){
        // console.log(returned_data.data);
        if(typeof(callback) == 'function'){
          callback(returned_data);
          // console.log('from the factory',returned_data.data);
        }
      });
  }

  factory.create = function(newfriend, callback) {
      $http.post('/friends', newfriend).then(function(returned_data){
        // console.log(returned_data.data);
        if (typeof(callback) == 'function'){
          callback(returned_data.data);
        }
      });
  }

  factory.update = function(id, friend, callback) {
    $http.put('/friends/' +  id, friend).then(function(returned_data) {
        console.log(returned_data.data);
        if (typeof(callback) == 'function'){
          callback(returned_data.data);
        }
    })
  }
  factory.show = function(id, callback) {
    $http.get('/friends/' +  id).then(function(returned_data){
      if(typeof(callback) == 'function'){
        friend = returned_data.data;
        callback(friend);
      }
    });
  }

  factory.delete = function(id, callback) {
    console.log(id);
    $http.delete('/friends/' + id).then(function(returned_data){
      if(typeof(callback)== 'function'){
        callback(returned_data.data);
      }
    });
  }
  return factory;
}]);
