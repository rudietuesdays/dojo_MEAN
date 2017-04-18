app.controller('registerController', ['$scope', '$location', '$routeParams', 'userFactory', function($scope, $location, $routeParams, userFactory){
  console.log('registration controller loaded');

  $scope.registerUser = function(){
    if($scope.newUser.password != $scope.newUser.pw_confirm){
      $scope.pw_error =  "passwords do not match";
    } else {
      userFactory.register($scope.newUser, function(data){
        // console.log(data);
        if (data.data.errors){
          $scope.errors = data.data.errors
        } else {
          $scope.newUser = {};
          $location.url('/dashboard');
        }
      })
    }

  }
}])
