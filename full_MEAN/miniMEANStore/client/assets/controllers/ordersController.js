app.controller('ordersController', ['customerFactory', 'productFactory','$scope','$location','$routeParams', function(customerFactory, productFactory, $scope, $location, $routeParams) {

  console.log('main controller instantiated');

  var index = function(){
    var showCustomers = function(){
      customerFactory.show(function(data){
        $scope.customers = data.data.customers;
        console.log('all customers: ', $scope.customers);
      })
    }

    var showProducts = function(){
      productFactory.show(function(data){
        $scope.products = data.data.products;
        console.log('all products: ', $scope.products);
      })
    }

    showCustomers();
    showProducts();
  }
  index();

}]);
