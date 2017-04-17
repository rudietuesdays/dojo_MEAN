// *callbacks* and *promises*

// *callbacks* and/or *promises* are used to control the timing of code
// normally JavaScript will run block by block, a callback/promise moves a piece of code outside of that normal run order
// examples: Mongoose queries, Angular controllers, Angular factories
  // For Angular factories, the promise resolution occurs after the $http.verb(‘route’) with .then
