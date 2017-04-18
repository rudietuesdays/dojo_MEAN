app.controller('loginController', ['$scope', '$location', '$routeParams', 'userFactory', function($scope, $location, $routeParams, userFactory){
  console.log('login controller loaded');

  $scope.loginUser = function(){
    console.log($scope.user);
    if($scope.user == undefined){
      $scope.login_error = "invalid email or password"
    } else {
      $scope.login_error = " "
      userFactory.login($scope.user, function(data){
        // console.log('data is', data);
        if(data.data.errors){
          $scope.login_error = data.data.errors.login.message;
        } else if (data.data == null) {
          $scope.email_error = 'invalid email or password'
        } else {
          $scope.user = {};
          $location.url('/dashboard');
        }
      })
    }
  }

}])
