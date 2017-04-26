app.controller('customersController', ['customerFactory', '$scope', '$location', '$routeParams', function(customerFactory, $scope, $location, $routeParams){

  console.log('customers controller instantiated');

  $scope.customers = {};

  var index = function(){
    moment().format();
    var showCustomers = function(){
      customerFactory.show(function(data){
        $scope.customers = data.data.customers;
        console.log('all customers: ', $scope.customers);
      })
    }

    showCustomers();
  }
  index();

  $scope.createCustomer = function(){
    customerFactory.create($scope.newCustomer, function(data){
      if (data.data.errors){
        console.log('ERRORS: ', data.data.errors);
        $scope.errors = data.data.errors;
      } else {
        $scope.newCustomer = {};
      }
      index();
    })
  }

  $scope.deleteCustomer = function(id){
    customerFactory.delete(id, function(data){
      if (data.data.errors){
        console.log("ERRORS: ", data.data.errors);
        $scope.errors = data.data.errors;
      } else { console.log(data);}
    })
    index();
  }
}])
