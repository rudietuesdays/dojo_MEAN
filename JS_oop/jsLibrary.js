var _ = {
  map: function(arr, callback) {
    for (var i = 0; i < arr.length; i++){
      arr[i] = callback(arr[i]);
    }
    return arr;
  },
  reduce: function(arr, callback, index) {
    if (!index){
      var index = 0;
    }
    var memo = arr[index];
    for(var i = (index + 1); i < arr.length; i++) {
      memo = callback(memo, arr[i]);
    }
    return memo;
  },
  find: function(arr, callback) {
    for(var i = 0; i < arr.length; i++) {
      if (callback(arr[i])) {
        return arr[i];
      }
    }
    return undefined;
  },
  filter: function(arr, callback) {
    newArr = [];
    for(var i = 0; i < arr.length; i++) {
      if (callback(arr[i])) {
        newArr.push(arr[i]);
      }
    }
    return newArr
  },
  reject: function(arr, callback) {
    newArr = [];
    for(var i = 0; i < arr.length; i++) {
      if (!callback(arr[i])) {
        newArr.push(arr[i]);
      }
    }
    return newArr
  }
}
// you just created a library with 5 methods!

var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
// console.log(evens); // if things are working right, this will return [2,4,6]

var times3 = _.map([1, 2, 3], function(num){ return num * 3; }); // => [3, 6, 9]
// console.log(times3);

var sum = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }); // => 6
// console.log(sum);

var even = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }); // => 2
// console.log(even);

var odds = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }); // => [1, 3, 5]
// console.log(odds);
