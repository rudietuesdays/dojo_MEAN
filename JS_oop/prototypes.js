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
