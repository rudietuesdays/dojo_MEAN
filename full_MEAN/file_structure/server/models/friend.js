console.log('loading friend model...');
var mongoose = require('mongoose');

// create dbs
var Schema = mongoose.Schema;

var friendSchema = new Schema({
  first: {type: String, required: true, minlength: 3},
  last: {type: String, required: true, minlength: 3},
  birthday: {type: Date, required: true},
}, {timestamps:true})

//setters
mongoose.model('Friend', friendSchema);
