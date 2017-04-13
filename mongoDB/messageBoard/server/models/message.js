var mongoose = require('mongoose');

// create dbs
var Schema = mongoose.Schema;

var MessageSchema = new Schema({
  name: {type: String, required: true, minlength: 3},
  content: {type: String, required: true},
  comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, {timestamps:true})

var Message = mongoose.model('Message', MessageSchema);
