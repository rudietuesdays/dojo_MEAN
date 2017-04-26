app.controller('productsController', ['productFactory', '$scope', '$location', '$routeParams', function(productFactory, $scope, $location, $routeParams){

  console.log('products controller instantiated');

  $scope.products = {};

  var index = function(){
    moment().format();
    var showProducts = function(){
      productFactory.show(function(data){
        $scope.products = data.data.products;
        console.log('all products: ', $scope.products);
      })
    }

    showProducts();
  }
  index();

  $scope.createProduct = function(){
    productFactory.create($scope.newProduct, function(data){
      if (data.data.errors){
        console.log('ERRORS: ', data.data.errors);
        $scope.errors = data.data.errors;
      } else {
        $scope.newProduct = {};
      }
      index();
    })
  }

}])
