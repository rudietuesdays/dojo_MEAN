console.log('loading message model...');
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var messageSchema = new Schema({

  content: {
    type: String,
    required: true,
  },
  
  _user: {type: Schema.Types.ObjectId, ref: 'User'},

  comments: [{type: Schema.Types.ObjectId, ref: 'Comments'}]

}, {timestamps:true});

mongoose.model('Message', messageSchema);
