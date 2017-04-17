var mongoose = require('mongoose');

// create dbs
var Schema = mongoose.Schema;

var pandaSchema = new Schema({
  name: {type: String, required: true, minlength: 3},
}, {timestamps:true})

//setters
mongoose.model('Panda', pandaSchema);
