// require mongoose
var mongoose = require('mongoose'),
// require fs module for loading model files
fs = require('fs'),
//require path to the models
path = require('path'),
// reg ex that checks for js extension
reg = new RegExp(".js$", "i"),
// create a path that points to the path where all the models live
models_path = path.join(__dirname, './../models'),
// database info
dbURI = "mongodb://localhost/dojoMEANWall";

// connect to db
mongoose.connect(dbURI);
// console.log("loading mongoose connection and model...");

// *  CONNECTION EVENTS * //
// when successfully connected:
mongoose.connection.on( 'connected', function () {
  console.log( `Mongoose default connection open to ${ dbURI }` );
});

// If the connection throws an error:
mongoose.connection.on( 'error', function ( err ) {
  console.error( `Mongoose default connection error: ${ err }` );
});

//When the connection is disconnected:
mongoose.connection.on( 'disconnected', function () {
  console.log( 'Mongoose default connection disconnected' );
});

//if the Node process ends, close the Mongoose connection:
process.on( 'SIGINT', function() {
  mongoose.connection.close( function () {
    console.log( 'Mongoose default connection disconnected through app termination' );
    process.exit( 0 );
 });
});

// read all the files in the models_path and require each js file
fs.readdirSync(models_path).forEach(function(file){
  // check if the file is a js file before requiring it
  if(reg.test(file)){
    require(path.join(models_path, file));
  }
})
