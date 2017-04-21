console.log('loading customer model...');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CustomerSchema = new Schema({

	name: {
		type: String,
		required: true
	},

	products: [{type: Schema.Types.ObjectId, ref: 'Product'}],

},{timestamps:true})

mongoose.model('Customer', CustomerSchema);
