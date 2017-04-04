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
