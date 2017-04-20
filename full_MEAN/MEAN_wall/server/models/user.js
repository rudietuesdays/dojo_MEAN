console.log('loading user model...');
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({

  username: {
    type: String,
    required: [true, 'enter username'],
    validate: {
      validator: function( value ){
        return /^([a-z])\w{5,20}$/.test( value );
      },
      message: "invalid username"
    }
  },

  messages: [{type: Schema.Types.ObjectId, ref: 'Message'}],

  comments: [{type: Schema.Types.ObjectId, ref: 'Comments'}],

}, {timestamps:true});

mongoose.model('User', userSchema);
