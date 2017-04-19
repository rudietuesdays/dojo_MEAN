app.controller('mainController', ['$scope', '$location', '$cookies', '$routeParams', 'userFactory', function($scope, $location, $cookies, $routeParams, userFactory){

  console.log('main controller loaded');

  $scope.logoutUser = function(){
    var cookies = $cookies.getAll();
    angular.forEach(cookies, function (v, k) { $cookies.remove(k); });
    $location.url('/');
    // console.log(cookies);
  }
}])
