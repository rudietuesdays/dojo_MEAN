var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'partials/loginReg.html'
  })
  .when('/dashboard', {
    templateUrl: 'partials/main.html'
  })
  .otherwise({
    templateUrl: 'partials/loginReg.html'
  });
})
