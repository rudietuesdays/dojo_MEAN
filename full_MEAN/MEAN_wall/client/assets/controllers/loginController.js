app.controller('loginController', ['$scope', '$location', '$cookies', '$routeParams', 'userFactory', function($scope, $location, $cookies, $routeParams, userFactory){

  console.log('login controller loaded');

  $scope.users = {};

  var index = function(){
    var cookies = $cookies.getAll();
    // console.log('cookies: ', cookies);
    }
  index();

  $scope.loginUser = function(){
    console.log($scope.user);
    if($scope.user == undefined){
      $scope.login_error = "enter a username"
    } else {
      $scope.login_error = " "
      userFactory.login($scope.user, function(data){
        // console.log('data is', data);
        if(data.data.errors){
          $scope.login_error = data.data.errors.username.message;
        } else if (data.data == null) {
          $scope.email_error = 'invalid username'
        } else {
          $cookies.put('uid', data.data._id);
          var userCookie = $cookies.get('uid');
          // console.log(userCookie);
          $scope.user = {};
          $location.url('/wall');
        }
      })
    }
  }

}])
