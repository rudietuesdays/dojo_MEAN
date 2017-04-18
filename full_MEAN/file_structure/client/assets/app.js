var app = angular.module('app', ['ngRoute']);
app.config(function($routeProvider){
  $routeProvider
  .when('/friends', {
    templateUrl: 'partials/main.html'
  })
  .when('/friends/new', {
    templateUrl: 'partials/new.html'
  })
  .when('/friends/:id', {
    templateUrl: 'partials/show.html'
  })
  .when('/friends/edit/:id', {
    templateUrl: 'partials/edit.html'
  })
  .otherwise({
    templateUrl: 'partials/main.html'
  });
})
