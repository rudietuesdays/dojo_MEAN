var app = angular.module('app', ['ngRoute', 'ngCookies']);
app.config(function ($routeProvider) {
	$routeProvider
  .when('/', { templateUrl: 'partials/main.html'})
	.when('/orders', {templateUrl:'partials/orders.html'})
	.when('/products', {templateUrl:'partials/products.html'})
  .when('/customers', {templateUrl:'partials/customers.html'})
  .otherwise({
    redirectTo: '/'
  });
// Routes to load your new and edit pages with new and edit controllers attached to them!
});
