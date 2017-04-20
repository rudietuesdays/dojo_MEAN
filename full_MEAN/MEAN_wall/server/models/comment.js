console.log('loading comment model...');
var mongoose = require('mongoose');

// create dbs
var Schema = mongoose.Schema;

var commentSchema = new Schema({

  content: {type: String, required: true},

  _message: {type: Schema.Types.ObjectId, ref: 'Message'},

  _user: {type: Schema.Types.ObjectId, ref: 'User'}

}, {timestamps:true})

var Comments = mongoose.model('Comments', commentSchema);
