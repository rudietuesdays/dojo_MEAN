console.log('loading product model...');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({

	name: {
		type: String,
		required: true
	},

  image: String,

  description: {
    type: String,
    required: true
  },

  quantity: {
    type: Number,
    required: true
  }

},{timestamps:true})

mongoose.model('Product', ProductSchema);
