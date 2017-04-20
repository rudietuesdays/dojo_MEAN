var app = angular.module('app', ['ngRoute', 'ngCookies']);

app.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'partials/login.html'
  })
  .when('/wall', {
    templateUrl: 'partials/wall.html'
  })
  .otherwise({
    templateUrl: 'partials/login.html'
  });
})
