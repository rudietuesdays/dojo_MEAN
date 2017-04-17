// *Angular*
// can be modularized into an MVC-like architecture
// angular *controllers* control what is rendered on a page (the *view*) by interacting with a factory (the *model*) that stores data and communicates with the server via AJAX calls

/***************************************************/

// The Big Picture

// everything is a controlled by an Angular directive called a *module*
var app = angular.module('app', []);

// views are controlled by an Angular directive called a *controller*
app.controller('PlayersController', ['$scope', function($scope) {
//javascript that controls the Player view goes here:
}]);
app.controller('AssociationsController', ['$scope', function($scope) {
//javascript that controls the Associations view goes here:
}]);
app.controller('TeamsController', ['$scope', function($scope) {
//javascript that controls the Teams view goes here:
}]);

// data are held in *factories*, which are created once per page render
app.factory('PlayerFactory', ['$http', function($http) {
  var players = {}; //object that holds methods and public properties for players.  Remember OOP - there are different ways of creating objects and adding methods and properties to that object.
  return players;
}]);
app.factory('TeamFactory', ['$http', function($http) {
  return {
    //object that holds methods and public properties for teams.  Remember OOP - there are different ways of creating objects and adding methods and properties to that object.
  };
}]);

/***************************************************/

// getting started

// IN Terminal, mkdir <proj name> => cd <proj name> => bower install --save angular
// touch index.html, include script tag with link to angular:
  <script src="bower_components/angular/angular.js" charset="utf-8"></script>
// tell the page you're using angular:
  <html ng-app>
// declare a variable (you won't use this too much)
  <body ng-init=" dojo='ninja' ">
// reference variable with {{ }}

// there's no need for ejs with angular because the client is doing the work

/***************************************************/

// *directives* and *data-binding*

// angular templates get *compiled* to angular views by angular compilers

// *data binding* allows angular to keep track of application data as a variable
  // by default, angular has a variable (object) called $scope for this purpose
// ngBind attribute tells Angular to replace the text content of the specified HTML element with the value of a given expression, and to update the text content when the value of that expression changes
// ng-init initializes data for use
// ng-repeat takes an array and acts as a loop to iterate through
// ng-click directive functions very much like the .click() jQuery handler
  // a function can be assigned to execute on click, for example:
  <input type='submit' value='add new student' ng-click='addStudent()'>

/***************************************************/

// *modules*
// inside an html script tag:
  var myAppModule = angular.module('myApp', []); // this line instantiates the module
  // param1 is the method's name, which is what ng-app should = in the html tag; for example:
    <html ng-app="myApp">

// *dependency injection* is a way of passing all necessary resources in a top-down inheritance pattern

/***************************************************/

// *controllers* and *$scope*

// *controllers* are responsible for logic pertaining to the flow of data in a certain portion of the view page
// *$scope* variable is what allows the controller to pass data to the view it controls
// angular utilizes two-way data binding, which means changes in the $scope data will be updated on the view AND changes on the view will be updated in the $scope

/***************************************************/

// *factories*
// *providers* in angular are objects that provide data to the controllers
  // *providers* can be *factories* or *services*
  // *factories* return objects, whereas *services* use keywords *new* and *this* to return objects

  myAppModule.factory('studentFactory', function(){
     var factory = {};
     factory.someKeyName = 'Some Value'
     factory.someMethodName = function(){ /* Code Here */ }
     return factory;
  })

// to inject the factory, add it to the list of injections in the controller function and give it a name in the params
  // for example:
  myAppModule.controller('studentsController', ['$scope', 'studentFactory', function ($scope, studentFactory){...}
// You can inject many services, and the same service can be injected into many controllers
// *factories* are *singletons*
  // a *singleton* is an object that can be used in many places, but any time it is called, the same object will be referenced in all cases
  // this means a factory can be used in many different controllers and all utilize the same object

/***************************************************/

// *routes*

// IN Terminal:
  // create/navigate to project folder
  // bower install angular angular-route --save
  // npm install express mongoose body-parser --save
    // don't need to install mongoose BUT ***server must be up and running for the app to work!***
    // this is bc angular routing requests the partial views from the server
    // server can be very lightweight (see angular_routes proj dir)

// now we inject 'ngRoute' for routing
angular.module("ourmodulename", ['ngRoute'])
// 'ngRoute' contains a number of providers, including $routeProvider that allows us to load partial views

// AJAX allows us to load partials in our HTML document

// html links MUST start with '#!' to prevent the browser from redirecting to another page and loading up all the resources (CSS, img, JS) associated with the new URL
  // for example:
  <a href="#!/">Partial 1</a>
  <a href="#!/partial2">Partial 2</a>

// each partial can have a controller, and the same controller can be used for more than one partial
  // BUT be wary of nesting controllers!

/***************************************************/

// * $location *
// helpful when it comes to redirecting from one partial to another

// inject $location into the controller and call $location:
  angular.controller(UsersController, function(UsersFactory, $scope, $location){
    console.log($location)
    $scope.createUser = function(){
      $location.url('/list');
    }
  })

// call $location in the fun

/***************************************************/

// * $routeParams *
// create a link with an id attached to pass it back to your routes
// for example, in partials/teams.html:
  <tr ng-repeat = 'team in TC.teams track by $index'>
  <td><a href="#/{{team.name}}" ng-bind = 'team.name'></a></td> // here's where we set the :teamname for app.js
  <td><button ng-click='TC.removeTeam($index)'>Remove</button></td>
  </tr>
// and in app.js:
  myApp.config(function ($routeProvider) {
    // continue of config
    .when('/:teamname',{ // show the following url when the team name is in the href
      templateUrl: 'partials/team.html'
   })
  });
// and in controller.js:
  myApp.controller('teamController', function(teamsFactory, $routeParams){ //inject $routeParams into your controller
    console.log($routeParams)
  })

/***************************************************/

// *ngMessages*
// *ngMessages* supplies input tags with validation options
// it is a helpful custom module for validations because angular has no idea what's going on in the backend with mongoose

// make sure to include or install on your project!
  // "//ajax.googleapis.com/ajax/libs/angularjs/X.Y.Z/angular-messages.js"
  // npm install --save angular-messages@X.Y.Z
  // bower install angular-messages#X.Y.Z
  // where X.Y.Z is the AngularJS version you are running

// inject the module in the app in index.html:
  var myApp = angular.module('myApp', ['ngRoute', 'ngMessages']);

// use it! for example, in partials/players.html:
  <div ng-controller='playersController as PC'>
   <h3>New Player</h3>
   <form name='playerForm'>
       Name: <input type='text' name='name' ng-model='PC.newPlayer.name' minlength='4' required>
       <button ng-click='PC.createPlayer()'>Add Player</button>
   </form>
  </div>

  // here are some example messages that might pop up inside the div above as errors
  <div ng-messages="playerForm.name.$error">
    <p ng-message="minlength">The player name is too short.</p>
    <p ng-message="required">The player name is required.</p>
  </div>
