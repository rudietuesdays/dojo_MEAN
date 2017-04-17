var app = angular.module('app', ['ngRoute']);
app.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'partials/main.html'
  })
  .when('/pandas/new', {
    templateUrl: 'partials/new.html'
  })
  .when('/edit/:id', {
    templateUrl: 'partials/edit.html'
  })
  .otherwise({
    templateUrl: 'partials/main.html'
  });
})
