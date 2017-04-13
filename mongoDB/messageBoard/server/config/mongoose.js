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
dbURI = "mongodb://localhost/dojoMessageBoard";

// connect to db
mongoose.connect(dbURI);

// read all the files in the models_path and require each js file
fs.readdirSync(models_path).forEach(function(file){
  // check if the file is a js file before requiring it
  if(reg.test(file)){
    require(path.join(models_path, file));
  }
})
