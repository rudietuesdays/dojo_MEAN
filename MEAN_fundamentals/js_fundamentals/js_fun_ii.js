// Create a simple for loop that sums all the integers between x and y (inclusive). Have it console log the final sum.
function sum(x, y){
  var low = x;
  var high = y;
  var sum = 0
  if (x > y){
    var low = y;
    var high = x;
  }
  for (low; low<=high; low++){
    sum += low;
  }
}
// sum(1,10)

// Write a loop that will go through an array, find the minimum value, and then return it
function minimum(arr){
  var min = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
// console.log(minimum([4,1,7,3]));

// Write a loop that will go through an array, find the average of all of the values, and then return it
function average(arr){
  var sum = arr[0];
  for (var i = 1; i < arr.length; i++){
    sum += arr[i];
  }
  var avg = sum/arr.length;
  return avg;
}
// console.log(average([4,1,7,3]));


// Rewrite these 3 as anonymous functions assigned to variables.

var sum = function(x, y){
  var low = x;
  var high = y;
  var sum = 0
  if (x > y){
    var low = y;
    var high = x;
  }
  for (low; low<=high; low++){
    sum += low;
  }
  console.log(sum);
}
// sum(1,10)

var minimum = function(arr){
  var min = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i]
    }
  }
  return min
}
// console.log(minimum([4,1,7,3]))

var average = function (arr){
  var sum = arr[0];
  for (var i = 1; i < arr.length; i++){
    sum += arr[i];
  }
  var avg = sum/arr.length;
  return avg;
}
// console.log(average([4,1,7,3]));


// Rewrite these as methods of an object
var Object = {
  sum: function(x, y){
    var low = x;
    var high = y;
    var sum = 0
    if (x > y){
      var low = y;
      var high = x;
    }
    for (low; low<=high; low++){
      sum += low;
    }
    console.log(sum);
  },

  minimum: function(arr){
    var min = arr[0];
    for (var i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i]
      }
    }
    return min
  },

  average: function (arr){
    var sum = arr[0];
    for (var i = 1; i < arr.length; i++){
      sum += arr[i];
    }
    var avg = sum/arr.length;
    return avg;
  }
}


// Create a JavaScript object called person with the following properties/methods
var person = {
  name: "rae",
  distance_traveled: 0,
  say_name: function(){
    console.log(person.name);
  },
  say_something: function(str){
    // console.log(person.name + " says, " + '\'' + str + '\'');
    // also accessible by:
    console.log(`${person.name} says ${str}`);
  },
  walk: function(){
    console.log(person.name + " is walking");
    this.distance_traveled += 3;
    return person;
  },
  run: function(){
    console.log(person.name + " is running");
    this.distance_traveled += 10;
    return person;
  },
  crawl: function(){
    console.log(person.name + " is crawling");
    this.distance_traveled += 1;
    return person;
  },
}

person.say_name();
person.say_something("wow i am such a coder");
person.walk();
console.log(person.distance_traveled);
person.run();
console.log(person.distance_traveled);
person.crawl();
console.log(person.distance_traveled);
person.crawl().walk().run().say_something('hi')
// person.say_something('yo').walk()
