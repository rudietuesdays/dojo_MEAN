app.factory('productFactory', ['$http', function($http) {

  console.log('product factory instantiated');

  var products = [];
  var product = {};
  var factory = {};

  factory.show = function(callback){
    $http.get('/products')
    .then(function(returned_data){
      if (typeof(callback) == 'function'){
        callback(returned_data);
        // console.log(returned_data);
      }
    })
  };

  factory.create = function(newProduct, callback){
    $http.post('/products', newProduct)
    .then(function(returned_data){
      if(typeof(callback) == 'function'){
        callback(returned_data);
        if(returned_data.data.errors || returned_data.data.errmsg){
          // console.log('ERRORS: ', returned_data.data.errors);
        } else { console.log('returned data: ', returned_data);}
      }
    })
  };

  return factory;
}]);
