var mongoose = require('mongoose');

// create dbs
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
  name: {type: String, required: true, minlength: 3},
  content: {type: String, required: true},
  _message: {type: Schema.Types.ObjectId, ref: 'Message'}
}, {timestamps:true})

var Comments = mongoose.model('Comment', CommentSchema);
