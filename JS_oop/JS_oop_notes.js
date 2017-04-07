// creating a function with a capital letter indicates that it is an object constructor
function NewPerson(name){
  return {
    name:name,
    sayName: function(){
     console.log(name);
    }
  }
}
var jane = NewPerson("jane");
jane.sayName();

// new and this
function Person(name){
  this.name = name;
  this.sayName = function(){
    console.log(name);
  }
}

var jimmy = new Person("Jimmy");
jimmy.sayName()

/****************************************/

// * organize your objects! *

// From this.....
// Overview: This function creates game objects, by returning a game object when invoked
function GameConstructor(consumerPrice,dealerCost,name, inStock){
  // private variables
  // dealerCost is private so a buyer can't see our ridiculous markup!
  var consumerPrice = consumerPrice;
  var dealerCost = dealerCost;
  // if you are returning an object, set it as the last private variable
  var ourGame = {}; // end of private properties
  // public properties
  //_ signifies a field that we shouldn't modify, but is public
  ourGame._name = name;
  ourGame.type = 'board game';
  ourGame.player = [];
  // public methods can affect private variables!
  ourGame.addPlayer = function(player_name){
    ourGame.player.push(player_name);
  }
  ourGame.showPrivateVariables = function(){
    console.log(dealerCost);
    console.log(consumerPrice);
  }//end of methods


  //private methods :
  function myPrivateFunction(){
    console.log('hello, I am going to create a new object when I am returned!');
  }
  //End private methods
    // run events prior to construction if necessary
  myPrivateFunction();
  // return your final object (We will learn about other strategies to construct objects soon!)
  return ourGame;
}

// To this...

/* **************** Game Constructor ******************
private vars: consumerPrice, dealerCost
private methods: myPrivateFunction: just console.logs, no logic
public properties:  _name: acquired from parameters
                    type: constant, 'board game'
                    player: array


public methods:     addPlayer: adds a player by name to player array
                    showPrivateVariables: console.logs our private variables
on run: runs myPrivateFunction
returns: ourGame object.
*****************  END *******************/


function GameConstructor(consumerPrice,dealerCost,name, inStock){


  var consumerPrice = consumerPrice;
  var dealerCost = dealerCost;
  var ourGame = {};


  ourGame._name = name;
  ourGame.type = 'board game';
  ourGame.player = [];


  ourGame.addPlayer = function(player_name){
    ourGame.player.push(player_name);
  }
  ourGame.showPrivateVariables = function(){
    console.log(dealerCost);
    console.log(consumerPrice);
  }


  function myPrivateFunction(){
    console.log('hello, I am going to create a new object when I am returned!');
  }


  myPrivateFunction();
  return ourGame;
}

/**************************************/

// *object constructors*

function NinjaConstructor(name, age, prevOccupation) {
  var ninja = {}; // the object that will eventually be returned

  // addition of public properties to ninja
  ninja.name = name;
  ninja.age = age;
  ninja.prevOccupation = prevOccupation;

  // Addition of public methods to ninja
  ninja.introduce = function() {
    console.log("Hi my name is " + ninja.name + ". I used to be a " + ninja.prevOccupation + " and now I'm a Ninja!");
  }

  // return ninja
  return ninja;
}


// // Create the Andrew Ninja
// var Andrew = NinjaConstructor("Andrew", 24, "Teacher");
// Andrew.introduce();
//
// // Create the Michael Ninja
// var Michael = NinjaConstructor("Michael", 34, "Founder");
//
// // here we redefine the introduce method for a particular "Instance" or Object
// Michael.introduce = function() {
//   console.log("I am the Sensei!")
// }
// Michael.introduce();
//
//

/*********************************/

 // time for *this* and *new*!
 function NinjaConstructor(name, age, prevOccupation) {
  // var this = {}; // this is not necessary when creating new objects with the *new* keyword

  // private vars & methods
  var self = this; // declare self to equal the new object we will create with new
  var privateVar = "This is a private variable";
  var privateMethod = function() {
    console.log("this is a private method for " + self.name);
  }

  // public vars & methods
  this.name = name;
  this.age = age;
  this.prevOccupation = prevOccupation;
  this.introduce = function() {
    console.log("Hi my name is " + this.name + ". I used to be a " + this.prevOccupation + " and now I'm a Ninja!");
    privateMethod() // will work since it is within the scope
    console.log(privateVar); // will work since it is within the scope
  }

  if (!(this instanceof NinjaConstructor)) {
   // the constructor was called without "new".
   return new NinjaConstructor(name, prevOccupation);
 }

 // return this; // this is not necessary when creating new objects with the *new* keyword
}

var dylan = new NinjaConstructor('Dylan', 'Construction Worker');
dylan.introduce();
// var nikki = NinjaConstructor('Nikki','Historian');
// nikki.introduce();
//
// var Pariece = new NinjaConstructor("Pariece", 24, "TFA Teacher");
// // try this:
// // Pariece.privateMethod();
// // or this:
// // privateMethod();
// // or this:
// // console.log(Pariece.privateVar);
// // none of these work. Think about the scope of each.

function User(name, ssn){
  // using var makes the SSN a private attribute so it can't accidentally be reset
  var social = ssn;

  // name is a public attribute, so it can be reset
  this.name = name;

  // Adds a so-called 'getter' function to allow reading private variables
  this.getSSN = function(){
    return social;
  }
}
var mike = new User('Mike', 274164398);
console.log(mike.getSSN()); // 274164398

/*********************************/

// * prototypes*

var MyObjConstructor = function(name){
  var myPrivateVar = "Hello"; // just to show that it is hard to see this private var easily
  this.name = name; // but you can see the name!
  this.method = function(){
    console.log( "I am a method");
  };
}
var obj1 = new MyObjConstructor('object1');
var obj2 = new MyObjConstructor('object2');
console.log(obj1);

// when logged in chrome , part of the output is as follows:
// method : function...
// name : 'object1'
// __proto__: MyObjConstructor   //
// constructor: function ...
// __proto__: Object // this is for *all* objects! Anything added to it (properties, methods) can be accessed by all obj in the program

// the __proto__ stands for *prototype*, which is how objects in JavaScript share properties and methods

obj1.newProperty = "newProperty!"; // only obj1 can access this, of course
obj1.__proto__.anotherProperty = "anotherProperty!"; // can be accessed by BOTH obj1 and obj2!
console.log(obj1.anotherProperty); // => anotherProperty!
console.log(obj1.newProperty); // => newProperty!
console.log(obj2.newProperty); // => undefined
console.log(obj2.anotherProperty); // => anotherProperty!
// obj1 and obj2 both have access to the *prototype object* anotherProperty because they are both instances of MyObjConstructor

// Every object constructor creates a second memory space for all objects created by that constructor that is accessed by proto. It is one memory space, so any changes there affect every object spit out by that constructor.

// prototypes don't get accessed by new instances of your object class until you need them -- they don't take up space on new instances until you call them

// Major PROS of Prototype
  // One memory space for all! If you are creating lots of the same object and use prototype, it can save you significant memory
  // Great for general methods for objects
  // We can access prototype methods with just using .method or .property.
  // The interpreter will go through all prototypes in the prototype chain to check if any of them have the called method or property before giving up (it'll return/use the first match it finds).

// the method above is NOT good practice for adding prototypes. Here IS good practice:
// After we create our MyObjConstructor:
MyObjConstructor.prototype.methodName = function(){
  //do stuff here!
}

// for example:
function Cat( cat_name ) {
  var name = cat_name;
  this.getName = function() {
    return name;
  };
}
//adding a method to the cat prototype
Cat.prototype.sayHi = function(){
  console.log('meow');
};
//adding properties to the cat prototype
Cat.prototype.numLegs = 4;
var muffin = new Cat('muffin');
var biscuit = new Cat('biscuit');
console.log(muffin, biscuit);
//we access prototype properties the same way as we would access 'own' properties
muffin.sayHi();
biscuit.sayHi();
console.log(muffin.numLegs);
// poor mutant cats: muffin.__proto__.numLegs ++;
// doing this to muffin will mess up all the cats!

/*********************************/

// *returning this*

// without any guidance, functions return *undefined*
// since *methods* are just functions of an object, they too will return *undefined* without guidance otherwise

/* ********** Our Node Class **********
Generates a node for a singly linked list
parameters:
  val: a numerical value
private variables/functions:
  none:
public properties/methods:
  val: val;
  next: // another Node or null
  passThis: a function that passes a console log of this and self.
************** END **********   */
var Node = function(val){
  this.val = val;
  this.next = null;
}
Node.prototype.passThis = function(custom_return){
  console.log(this, "this");
  console.log(this.self, "self");
  console.log(custom_return, "My Return");
  return custom_return;
}
// ****************** END OF NODE ******************
/* ************* Singly Linked List Class (SLL) *****************
Creates a simple singly linked list class with not too many methods yet!
parameters: none
private: none
public properties:
  head: first node in the List
public methods:
  add: adds a new node based on a value passed in. returns this
  dequeue: removes the head, and gives it to a callback, if a callback is passed. returns this
  remove_tail: removes the tail, and gives it to a callback as an argument, only if a callback is passed. returns this.
************** END **********   */
var SLL = function(){
  this.head = null;
}
SLL.prototype.add = function (val) {
  if (!this.head){
    this.head = new Node(val);
    return this;
  }
  var current = this.head;
  while(current.next){
    current = current.next;
  }
  current.next = new Node(val);
  return this;
};
SLL.prototype.dequeue = function (callback) {
  var eliminatedNode = this.head;
  this.head = this.head.next;
  eliminatedNode.next = null;
  if (typeof(callback)=='function'){
    callback(eliminatedNode);
  }
  //console.log(this.head); optional
  return this;
};
// Write a remove tail! :)
SLL.prototype.removeTail = function(){
  var current = this.head;
  while (current.next.next){
    if (!current.next.next){
      current.next = null;
    }
    current = current.next;
  }
  console.log(current.val);
}
// ************************ END OF LIST ************************
sList = new SLL();
sList.add(1).add(2).add(3).add(4).head.next.passThis(sList).dequeue(
  function callback(myNode){
    console.log(myNode.val, "CHAINING INSANITY!");
  })
  .dequeue(
    function anotherCallback(myNode){
      console.log("******************************");
      console.log('Seriously, Stop!', myNode);
    });
sList2 = new SLL();
sList2.add('hello').add('hi').removeTail()

/*********************************/

function Ninja(name){
  this.name = name;   // creating instance variables
  this.distance_traveled = 0;
}
// creating an instance method
Ninja.prototype.walk = function() {
    console.log(this.name + ' is walking');
    this.distance_traveled += 1;
    return this;      // have this method return its own object
  };
// creating an instance method
Ninja.prototype.run = function() {
    console.log(this.name + ' is running');
    this.distance_traveled += 5;
    this.displayDistanceTraveled();
    return this;      // have this method return its own object
  };
//another instance method
Ninja.prototype.displayDistanceTraveled = function() {
    console.log('distance traveled: ', this.distance_traveled);
}


// creating instances/objects
var ninja1 = new Ninja('Jay');
var ninja2 = new Ninja('Michael');
var ninja3 = new Ninja('Andrew');


ninja1.walk().run().walk().run().run();  // because walk/run returns itself, we can chain these methods


// you can also log ninja1 and study it
console.log(ninja1);

/****************************************/

// bind, call, apply

// We talked about the keyword this, and object constructors. In quick summary: when we call new Constructor(); a few things happen:
  // a new instance of Constructor is created that inherits from object. the new instance is linked with the Constructor.prototype. this is bound to the newly constructed instance. the object is returned.
  // Bind, Call, and Apply allow us to regulate this

// *bind* creates a new method or overwrites a method in the object

// think of commas when you hear *call*
// think of arrays when you hear *apply*

function Ninja(name, age){
  this.name = name;
  this.age = age;
  // there could be lots of other stuff here!
}
function BlackBelt(name,age){
  //Commas!
  Ninja.call(this,name,age);
  this.belt = 'black';
}
function YellowBelt(name,age){
  //ARRAY
  Ninja.apply(this,[name,age]);
  this.belt = 'yellow';
}
var yB = new YellowBelt('mike', 40);
var bB = new BlackBelt('charlie', 29);
console.log(bB.name);
console.log(yB.name);

function levelUp() {
  console.log(this.name + " has learned a new kata, in " + this.gender + " favorite language: " + this.language);
}


var person = {
  name: 'Lisa',
  gender: 'her',
  language: 'JavaScript, duh!'
};


levelUp.call(person);

/****************************************/

// callbacks
// *callbacks* are really just a fancy name for a function passed as an argument to another function
// callbacks are the most common way of writing *asynchronous code* in JS
// *asynchronous code* is the ability to divide code into portions that run now and later
function myOriginalFx(){
  console.log("hello");
}

// myOriginalFx();

function invokedFx(callback){
  var x = setInterval(function(){
    callback();
  }, 4000)
}

invokedFx(myOriginalFx);
invokedFx(function(){console.log('world');})

// set timeout is a stand-in for Ajax requests that will be made to the server
console.log("NOW: ");
console.log("Declaring and assigning variable 'ninja'.");
var ninja = 'Libby';

setTimeout( function myCallbackFunction(){
  console.log("LATER: ")
  console.log(ninja, "LATER"); }, 2000
);

console.log("Printing ninja value.");
console.log(ninja, "NOW");

// callbacks can help create a more seamless UX on a webpage, bc we can send and receive data and update the DOM w/o needed to refresh the page
function doSomething(possibleCallback) {
  if (typeof(possibleCallback) === 'function'){
    console.log('possibleCallback is a callback!');
    possibleCallback(); //we can invoke the callback!
  }
  else {
    console.log('possibleCallback: ', possibleCallback, ' is not a callback function.');
  }
}
doSomething(function myCallback(){ console.log('yes, I am a callback!') });
doSomething('string');

//in the example below, note that makeSauce doesn't have () after when it's an argument
// that's because we want it to pass the function definition, or list of instructions, rather than executing yet
function makePasta(pasta, makeSauce) {
  console.log("Boiling water");
  console.log("Putting " + pasta + " pasta in the water");
  // create a variable for sauce!
  var sauce = makeSauce();          // invoke makeSauce, our callback
  console.log("Mixing sauce");
  console.log("Pasta is done!");
  return pasta + " Pasta! with " + sauce + " sauce! Voila!";
}
function makePesto() {
  console.log("Making Pesto");
  return "pesto";
}
function makeAlfredo() {
  console.log("Making Alfredo");
  return "alfredo";
}
makePasta("Penne", makeAlfredo);
makePasta("Farfalle", makePesto);

/****************************************/

// *delegating*
// *callbacks* are used to *delegate* functionality
// if a function takes a callback, that callback can do lots of things -- the callback can be ~delegated~ to a specific task

// for example:
function leadBootcamp(language, leader){
    var outcome = leader(language);
    console.log(outcome);
}
function Mike(language){
  var languages={
    'javascript':'successful leader',
    'PHP':'successful leader',
    'Python':'successful leader',
    'Ruby':'successful leader',
  }
  if(languages[language]){
    return languages[language];
  }
  else {
    return "maybe not yet";
  }
}
function Charlie(language){
  var languages={
    'javascript':'successful leader',
    'PHP':'successful leader',
    'Python':'successful leader',
    'Ruby':'successful leader',
  }
  if(languages[language]){
    return languages[language];
  }
  else {
    return "maybe not yet";
  }
}
function Jimmy(language){
  var languages={
    'javascript':'successful leader',
    'PHP':'successful leader',
    'Python':'successful leader',
    'Ruby':'successful leader',
    'iOS':'successful leader',
    'java_android':'successful leader',
  }
  if(languages[language]){
    return languages[language];
  }
  else {
    return "maybe not yet";
  }
}
leadBootcamp('java_android', Mike);
leadBootcamp('java_android', Charlie);
leadBootcamp('java_android', Jimmy);

// This is a function that just prints the result of another list of instructions
function printResult(doSomething) {
 var result = doSomething(); // store the return value of the callback parameter
 console.log(result); // print the result!
}
printResult(function returnFive(){ return 5 })  // this should print "5"
printResult(function(){ return 5 }) // also works with an anonymous function!


function each(arr, callback) {
  // loop through the array
  for(var i = 0; i < arr.length; i++) {
    callback(arr[i]); // invoking the callback many times... delegation!
  }
}
// call the each function
each([1,2,3], function(num) { alert(num + " I am from the callback!"); }) //so many alerts! (also, this only works in your browser)

/****************************************/

// *asynchronicity*
// JS runs asynchronously, meaning after the intepreter hoists variables and functions to the top of their scope, JS runs code-block by code-block

//simulated really slow DB call:
function getStuffFromDatabase(callback){
  var data;
  var myTimer = setTimeout(function(){
    if (typeof(callback) == 'function'){
      //it just got back from the DB!
      data = [{name:'Todd'},{name:'Michael'},{name:'Portia'}];
      callback(data);
    }
  }, 10000);
  // it takes 10 seconds to get anything back <- you should fix your cloud server!!!
  return data;
}
// //simulated request (failing):
// function requestDataFromDatabase(){
//   var data = getStuffFromDatabase(); // this should return my data right??
//   console.log(data);
// }

function requestDataFromDatabase(){
  var data = getStuffFromDatabase(function myCallback(data){ // ooh shiny callback!.. invoked after 10 seconds as per the callback fx!!
    console.log(data, "ASynchronous");
    for (var i = 0; i < data.length; i ++){
      console.log(data[i].name);
    }
  });
  console.log(data, "Synchronous");
}

function catchFly(){
  console.log('I just caught a fly!');
}
requestDataFromDatabase();
// keep running my program!
console.log('Hello');
catchFly();
//etc.

/*************************************************/

// *promises* and callbacks
// .then and .catch

function getStuffFromDatabase(resolve,reject){
    var data = "whee"
    setTimeout(function(){
      // if (typeof(callback) == 'function'){
        data = [{name:'Todd'},{name:'Michael'},{name:'Portia'}];
        resolve(data);
      // }
    }, 1000);
    // reject(); // comment this line in and out!
    return data;
}
function requestDataFromDatabase(){
  console.log('running');
  //creates promise
  var data = new Promise(function(resolve,reject){
    getStuffFromDatabase(resolve,reject); // kind of like a shiny callback
  });
  // if promise is successful (keeps me from putting all the logic in the callback)
  // A promise listens for resolve, and reject, and ends the promise after one of these methods runs
  // .then fires with resolve()
  data.then(function(data){
    console.log(data, "ASynchronous");
    for (var i = 0; i < data.length; i ++){
      console.log(data[i].name);
    }
  });
  // .catch fires with reject()
  data.catch(function(){
    console.log('failure');
  })
  console.log('end');
}
requestDataFromDatabase();

/*************************************************/

// event handling

//example html:
<html>
  <body>
    <button id="someButton">This is Some Button</button>
    <script>
 // some js code here to add an event listener to the button
    </script>
  </body>
</html>


// example JS:
// Link our variable "button" to a DOM element by storing it in a var
var button = document.getElementById("someButton")
// add a DOM eventListener to that variable.
button.addEventListener("click", whatToDoOnClick);
// here we define the whatToDoOnClick function
function whatToDoOnClick() {
  alert("You Did it!")
}

/*************************************************/

// immediate functions
// this pattern is useful for initialization code that only needs to run once at the beginning of your application to set up your environment for the rest of your code, such as attaching event handlers
// since we don’t need to repeat this code, it’s unnecessary to create a named function

(function() {
   console.log( "I'm an immediate function!" );
}()); // notice all the () going on right here

// OR...
(function() {
   console.log( "I'm an immediate function!" );
})(); // now notice it here!

// () is used to invoke a function. ( ) helps define the order of operations.
// (myfunction)<-- do this first (myfunction)() <-- create the function before doing anything else and then invoke the function!
// Alternative Syntax: (myfunction()) <-- create and run the function before doing anything else.

// passing arguments to immediate functions:
(function (param1, param2){
   console.log( "I'm an immediate function!" );
}) ( arg1, arg2 )

// Most JS libraries use immediate functions, which helps prevent the libraries private variables and functions from contaminating the user of the library’s name space
//For example, you had the following code:
var a = "Hi";
var b = 38;
function test() {
  //some code here
}
function add() {
  //some code here
}
test();
// if this was how you wrote your javascript library (basically codes where others can use your codes/methods), if someone else also used a variable a, b, or had functions named test or add, this would cause conflicts and cause lots of problems
// to eliminate these variables/methods being exposed outside and to contain its scoping, you could wrap them inside an immediate function
// as follows:
( function() {
   var a = "Hi";
   var b = 38;
   function test() {
     //some codes here
   }
   function add() {
     //some codes here
   }
   test();
}());

/*************************************************/

// closures
// a *closure* is a fx returned from another fx
// example:
// Here we have a function called "Outer"
function Outer() {
  // There is a count variable that is scoped to the function
var count = 0;
  // There is an inner function that increments count and then console.logs it
function inner() {
    // increment count
count++
    // console.log count
console.log(count);
}
  // return the inner function! We can return a function!
return inner
}
// counter is now the function returned from invoking Outer
var counter = Outer();
          // if we invoke the counter function
counter()     // this will console.log "1"
counter()     // this will console.log "2"
counter()     // this will console.log "3"
counter()     // this will console.log "4"
          // So that means that the count variable still exists!
          // and it is being changed even though we aren't inside of the Outer function!

               // What if we try to access count out here?
console.log(count) // doesn't work!
// the count variable was instantiated when the Outer function was called
// when we returned the innter fx, it got stored in 'counter'
// now ever time we called counter(), it has access to the *enclosed* var from the Outer fx
// remember: the inner function in a closure is the one that is returned and accessed outside of the function definition

/*************************************************/

// currying
// *currying* is the idea that you only run part of a fx rather than the whole thing
// this is *functional programming*, NOT OOP
// example uncurried:
function ninjaBelt(ninja, beltColor){
  console.log("Ninja "+ ninja + " has earned a " + beltColor +" belt.");
}
ninjaBelt('Eileen', 'black');

// example curried:
function ninjaBelt(ninja){
  return function belt(beltColor){ //note the closure here!
    console.log("Ninja "+ ninja + " has earned a " + beltColor +" belt.");
  }
}
ninjaBelt('Eileen')('black'); //note the double invocation here.

/*************************************************/

// JS libraries

// Angular: Lots of companies prefer hiring developers that have some exposure to Angular. We’ll do more with this later in the MEAN course: http://angularjs.org/

// React: A view rendering template that uses a virtual DOM! (Developed by Facebook) At the simplest level, you can think of React a lot like the block building model we used to efficiently build out sites in the HTML Fundamentals, but done in JavaScript! This is great because you can reuse blocks of code easily. https://facebook.github.io/react/

// BackBone:  “Backbone is an attempt to discover the minimal set of data-structuring (models and collections) and user interface (views and URLs) primitives that are generally useful when building web applications with JavaScript.” – http://backbonejs.org/

// and of course...
// jQuery: “jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers. With a combination of versatility and extensibility, jQuery has changed the way that millions of people write JavaScript.” – from jQuery’s website: https://jquery.com/

// In addition there are two HTML tags that are heavily driven by
// <canvas> and <svg>

// The libraries below use these elements to generate cool effects:
  // d3js (Data Drive Documents): https://d3js.org/ (svg)
  // PaperJS - http://paperjs.org/ (canvas)
  // In addition:
  // WebRTC - http://www.webrtc.org/
// With this technology, you can create voice chat, google hangout type of app, all with a few lines of JavaScript! This is really amazing and you could play around with this for your project.

/*************************************************/

// recap!

// three key behaviors of JavaScript *hoisting* : function acts like a cage, var rises like a hot air balloon, and = stays put like an anchor!
