// *require* and *module.exports*

// example:
// dictionary.js file:
var dictionary = ['apple', 'banana', 'peanut', 'butter', 'grapes', 'jelly'];
module.exports = dictionary // export the dictionary
// search.js file:
var dictionary = require('./dictionary.js'); // require the dictionary
function search(word, dictionary) {
  for(w in dictionary) {
    if(dictionary[w] == word) {
      return true;
    }
  }
  return false;
}

// *require* is a function that takes a parameter
  // the parameter is the location of the file being required
// *require* first executes the code in the file and then passes back the value inside of module.exports as a return value
