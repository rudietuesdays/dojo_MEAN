// FS and HTTP

// reading and writing files is essential to any server!
// *reading* allows us to obtain content to server clients
// *writing* allows us to output content to the client
// FS module in Node allows us to read and write content from files
// HTTP module in Node allows us to build a web server that accepts HTTP request and can serve responses

/**************************************/

// Node modules

// in Node.js, we need to be able to pull code from JS files into other JS files
// we use *require()* to do this
// Requiring a Node module allows you to use the module.exports object of another file!

//example server file:
var my_module = require('./my_module');
my_module.greet();
my_module.add(5,6);

// example module
module.exports = {
    greet: function(){
        console.log("we are now using a module!");
    },
    add: function(num1, num2){
        console.log("the sum is:", num1 + num2);
    }
}

// the server file calls to module with require('./my_module')
// notice that you don't write '.js' at the end of the string above
  // that's because this method automatically looks for JS files, so a file extension isn't needed
// Normally, require() looks for node modules that aren't in the same directory as the file that is running
  // by default, require() looks for the modules located in a folder called node_modules
  // To tell require() to look in the current directory (i.e. the folder that the file is located in) we have to include "./" in front of the file path.
  // "./" (dot-slash) is the file path for the current directory.
