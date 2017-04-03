// //two ways of doing the same problem:
// // multiply each value in the array by 5
// var myarr = [1,5,25,125,42];
// // version 1:
// for (var index in myarr){
//   console.log(myarr[index]*5);
// }
// // version 2:
// for (var i = 0; i < myarr.length; i++) {
//   console.log(myarr[i]*5);
// }
//
// // another example:
// // print to the console the all the key and value pairs in the dictionay
// var myObject = {
//   language: "JavaScript",
//   dojo: "Washington, DC",
//   name: "Rae"
// }
// // version 1:
// Object.keys(myObject).forEach(function(key, value){
//   console.log(key, value, myObject[key])
// })
// // version 2:
// for (var key in myObject){
//   console.log(key, myObject[key])
// }

///////////////////////////////

// // variables!
// // use the built-in function typeof to find out what your variable contains
// var my_first_variable;
// my_first_variable = "Data";
// console.log(my_first_variable);
// console.log(typeof(my_first_variable)) // => string

// // hoisting
// console.log(a);
// var a = "weird";
// console.log(typeof(b));
// var b = "weird too";
// console.log(typeof(b));
// // a will be undefined; b will be undefined on like 41 and then defined on line 43

///////////////////////////////

// // arrays review
// var empty_array = [ ]; // create empty array with square brackets  (creates a bureau of drawers)
// var string_array = [ "hi", "these", "are", "strings" ];
// var x = 15; // you can log these vars in the console (even a whole array)
// console.log("Logging variables to the console", empty_array, string_array, x);
// // use square brackets again(e.g. string_array[1])  to access values in the array (to open a specific drawer in the bureau)
// console.log('2nd value of string_array', string_array[1]);
// // get the length of the array
// console.log('string_array has a length of', string_array.length);
// string_array.push('awesome'); // adding a new value to the array
// console.log(string_array); // you'll note that string_array now has a new value called awesome
// string_array.pop(); // removing the last value in the array
// console.log(string_array); // the last value in the array is now gone!

///////////////////////////////

// // length review
// var arr = [3, 6];
// arr[234] = "hi";
// console.log( arr.length ); // 235
// console.log( arr[34] ); // undefined
//
// var arr = [3, 6];
// arr[234] = "hi";
// //
// console.log( arr.length ); // 235
// console.log( arr[34] ); // undefined
// arr.length = 3;
// console.log( arr[34] ); // undefined
// console.log( arr[234] ); //undefined
// console.log( arr.length ); // 3
// arr.length = 500;
// console.log( arr[234] ); // undefined
// console.log( arr.length ); // 500

///////////////////////////////

// // functions review
// function myFunctionName(firstParameter, secondParameter){
//   var myProduct = firstParameter * secondParameter;
//   return myProduct
// }
// console.log(myFunctionName(5,14));
// var theProductOfFiveAndFourteen = myFunctionName(5,14);

// function // tells JS that this is a function
// myFunctionName // *identifier* allows the fx to be called by name
// ( ) // inside the ( ) are the *parameters* that may be passed into the fx
// (5, 14) // these numbers used above are *arguments*. for every *parameter* given, the fx looks for a corresponding *argument*
// { } // everything inside { } is the body of the fx
// return // tells the fx what to send back -- if nothing is declared, it will return undefined

// Functions in Javascript are known as “First-Class”. This means that they can basically go wherever they want!
  // Functions can be stored as standalone functions (like above), as the value of variables, or as attributes in a JavaScript object (where they're known as methods)
  // Functions can be passed as arguments to functions (known as a callback)
  // Functions can be returned from functions.

///////////////////////////////

// // *conditionals* contain expressions like (condition_1) below that evaluate to true or false
// if ( condition_1 ) {
//    // code
// } else if ( condition_2 ) {
//    // code
// } else {
//    // code
// }

// // here's some sudo code:
// if(flattire)
// {
//   // pull over
//   // find jack
//   // raise car
//   // replace tire
//   // continue driving
// }

// false
// 0 // numerical 0
// null
// undefined
// "" // empty String
// NaN // numerical Not a Number

// //example
// var x = 15;
// if ( x < 10 ) {
//    console.log("x is less than 10");
// } else if ( x < 20 ) {
//    console.log("x is less than 20");
// } else {
//    console.log("x is greater than 20!");
// }

// ternary operator
// shorthand to say if true, do this; if false, do that
// (condition) ? console.log(true) : console.log(false)

///////////////////////////////

// // while loops
// example
// while(driving){
//   //keep  our eyes on the road
//   //keep our hands on the wheel
//   //obey speed limit signs
// }

// example:
// function countDown(number){
//   while(number > 0){
//     console.log(number);
//     number --;
//   }
// }
// countDown(10);

// a do while loop guarantees the code will run at least once
// example:
// do {
// // ride the water slide
// // check parent_permission
// }
// while (parent_permission)

///////////////////////////////

// for loops
// This means start at i = 0; as long as i < 10 keep looping; after every loop add 1 to i
// for (var i = 0; i < 10; i++) { // notice the var keyword preceding our variable name as always
//     console.log(i);
// }
// anatomy: var i = 0; <-- a starting variable usually countable.
// i < 10; <-- logic of when to end (usually just 1 thing, but you can use complex logic if you want to/need to);
// i ++ <-- mechanism for incrementing i to reach the logical end

// var array = [4,1,6,9,44];
// for (var i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }
//
// // for-in loops
// // generally used for objects
// var ninja = {
//   name:'Susanna',
//   MEAN_belt:10,
//   iOS_belt:10,
//   python_belt:10,
//   php_belt:9, // she hadn't mastered deploying yet!
//   ruby_belt:9.75 // done in 1.5 hrs though!
// }
// for (var key in ninja) {
//   if (ninja.hasOwnProperty(key)) {
//     console.log(key);
//     console.log(ninja[key]);
//   }
// }

///////////////////////////////

// objects
// If an array was a file cabinet that maintains order by linking each value with an index, an object lets us escape the confines of a numerical indexing system

// var array = [ function(){console.log('hello there');} ]
// array[0](); // invoke the function
//
// // what if there are multiple functions? name them!
// // functions inside of objects are called *methods*
// // dictionaries and objects don't have the same numberical indexing as arrays, which is why it's importanlt to name each *value* with a *key*
// var object = { helloFunc: function(){console.log('hello there');} }

// // key in JS objects are called *properties* or *attributes*
// var dojo = {}; // creates an empty object
// dojo = {
//   name: 'Coding Dojo', // property can store a string
//   number_of_students: 25, // property can store a number
//   instructors: ['Andrew', 'Michael', 'Jay'], // property can store arrays
//   location: { // property can even store another object!
//     city: 'San Jose',
//     state: 'CA',
//     zipcode: 95112
//   }
// } // access object properties with dot (.) notation
// console.log(dojo.name, dojo.number_of_students, dojo.instructors, dojo.location);
// console.log(dojo["name"]); // or bracket [] notation (note: specify key in quotes)
// dojo.number_of_students = 40; // we can reassign any of the properties
// dojo.location.city = "Bellevue";
// dojo.location.state = "Washington";
// dojo.location.zipcode = "unknown"; // note that we can change this from integer to string
// dojo.phone_number = 1234567890 ;
// console.log(dojo.number_of_students) // 40
// console.log(dojo) // prints the whole object, now including phone #

// arrays are generally used to keep track of a list of related things of the same type
// example:
// var myShortPrimeNumberArray = [2,3,5,7];

// objects are generally used to keep attributes of a thing associated with that thing
// example:
// var myDonut = {
//   frosting: 'glazed',
//   type: 'old fashioned',
// }

///////////////////////////////

// // purchasing donuts example with functions and objects
//
// // It is very common to see arrays filled with objects, where the objects all have the same keys, but with different values:
// var glazedDonuts = [
//   {
//     frosting: 'glazed',
//     type: 'old fashioned',
//     age: '45',
//     time: 'minutes'
//   },
//   {
//     frosting: 'glazed',
//     type: 'regular',
//     age: '5',
//     time: 'minutes'
//   },
//   {
//     frosting: 'glazed',
//     type: 'jelly filled',
//     age: '1',
//     time: 'seconds'
//   }
// ];
//
// // Can I buy the 1st donut on the rack if it has been out of the oven for fewer than 25 minutes? The code for that would be (this actually runs!):
// var purchase;
// //You
// if((glazedDonuts[0].age < 25 && glazedDonuts[0].time == 'minutes') || glazedDonuts[0].time == 'seconds'){
//   //shop owner
//   purchase = glazedDonuts[0];
// }
// else {
//   console.log('sorry it has been out a bit longer');
// }

///////////////////////////////

// // fx hoisting
//
// // this code will work, which shows that standalone functions get *hoisted* to the top of their scope
// awesome();
// function awesome() {
//   console.log("too good to be true");
// }
//
// // HOWEVER
// varFunction();
// var varFunction = function() {
//   console.log("How will this get hoisted?")
// }
// // this code will throw an error, “varFunction is not a function”
// // standalone functions get hoisted, but this code assigns the fx to a *variable*. variables get hosted to the top of their scope with the initial value of undefined

///////////////////////////////

// fx scoping

// function addNumbers(a,b){
//   var sum = a + b;
//   return sum;
// }
// console.log(sum) // will throw an error -- var sum isn't defined outside the fx
// // addNumbers scope has var sum; global scope does not!

// function addNumbers(a,b){
//   // console.log(a,b);
//   var sum = a + b;
//   console.log(sum)
//   return sum;
// }
// function addArrayElements(array){
//   var array_sum = 0;
//   var array_length = array.length;
//   for (var i = 0; i < array_length; i++){
//     array_sum = addNumbers(array_sum, array[i]);
//     // console.log(array_sum, array[i]);
//   }
//   return array_sum
// }
// var new_sum = addArrayElements([3,4,5])
// // addNumbers scope: available vars: sum
// // addArrayElements scope: available vars: array_sum, array_length, i
// // global scope: available vars: new_sum

// // same same but NESTED:
function addArrayElements(array){
  var array_sum = 0;
  var array_length = array.length;

  for (var i = 0; i < array_length; i++){
    array_sum = addNumbers(array_sum, array[i]);
  }

  function addNumbers(a,b){
    var sum = a + b;
    return sum;
  }

  return array_sum
}

var new_sum = addArrayElements([3,4,5])
console.log(new_sum)
// addNumbers scope: available vars: sum, array_sum, array_length, i
// addArrayElements scope: available vars: array_sum, array_length, i
// global scope: available vars: new_sum

// Each function has access to all the variables in its parent functions
// No function has access to the variables in its child functions
// You can think of the whole .js file as an outer function when thinking about scope
