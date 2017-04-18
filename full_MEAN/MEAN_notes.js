// *callbacks* and *promises*

// *callbacks* and/or *promises* are used to control the timing of code
// normally JavaScript will run block by block, a callback/promise moves a piece of code outside of that normal run order
// examples: Mongoose queries, Angular controllers, Angular factories
  // For Angular factories, the promise resolution occurs after the $http.verb(‘route’) with .then

// example *callbacks* problem:
/* Failed Example */
function buyDonut(){
  orderDonut();
  console.log('pay');
  console.log('walk out door');
}
/* function that gets a donut */
function orderDonut(){
  var x = setTimeout(function () {
    console.log('donut on counter');
  }, 10);
}
buyDonut();
/* Callback Example */
function buyDonut2(){
  orderDonut2(function whatToDoAfterDonutOnCounter(){
    console.log('pay');
    console.log('walk out door');
  });
}
/* function that gets a donut */
function orderDonut2(callback){
  var x = setTimeout(function () {
    console.log('donut is on counter');
    callback();
  }, 10);
}
buyDonut2();

// example *promise* problem
var beginDonutTransaction = new Promise(
  function(resolve,reject){
    var x = setTimeout(function () {
      console.log('donut is on counter');
      resolve();
    }, 10);
  }
);
beginDonutTransaction
.then(function(){
  //this is the resolve
  console.log('pay');
  console.log('walk out door');
})
.catch(function(){
  //this is the reject
  console.log("give me my donut!");
});

/************************************************/

// *MVC*

// *Express MVC*
  // *routes* file routes to different Mongoose controller methods
  // *controllers* files  dictate which data get returned using the response object (e.g. res.json()), often after communicating with a models file
    // they rely heavily on promises/callbacks to determine when data can be returned to the views
  // *models* files are blueprints to communicate with the db
    // can be used to do logic (like validations) prior to saving info
  // *mongoose* connection file connects to the db and loads all files with a .js extension found in the models folder

// *Angular MVC*
  // *app.js* - Angular Module file
    // usually includes providers (like ngRoute, ngCookies)
    // often includes .config specs, including the routeProvider which will generate routes that load partial views into the ng-view directive
  // *factories* files are singleton services that generate an object that can be *injected* into other directives (often into angular controllers)
    // can store local data and communicate with the server via $http requests caught by the routes file and generally return JSON info to the factory, handled by a promise
  // *controllers* integrate with factories and HTML (usually through *partial* views)
    // data is usually passed between controllers through a factory that is injected into both controllers
