app.factory('customerFactory', ['$http', function($http) {

  console.log('customer factory instantiated');

  var customers = [];
  var customer = {};
  var factory = {};

  factory.show = function(callback){
    $http.get('/customers')
    .then(function(returned_data){
      if (typeof(callback) == 'function'){
        callback(returned_data);
        // console.log(returned_data);
      }
    })
  };

  factory.create = function(newCustomer, callback){
    $http.post('/customers', newCustomer)
    .then(function(returned_data){
      if(typeof(callback) == 'function'){
        callback(returned_data);
        if(returned_data.data.errors || returned_data.data.errmsg){
          // console.log('ERRORS: ', returned_data.data.errors);
        } else { console.log('returned data: ', returned_data);}
      }
    })
  };

  factory.delete = function(id, callback){
    $http.delete('/customers/'+ id)
    .then(function(returned_data){
      if (typeof(callback) ==
    'function'){
      callback(returned_data);
    }
    })
  }

  return factory;
}]);
