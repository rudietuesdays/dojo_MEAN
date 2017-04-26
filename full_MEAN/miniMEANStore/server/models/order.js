console.log('loading order model...');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrderSchema = new Schema({

  quantity: {
    type: Number,
    required: true
  },

  _customer: {
    type: Schema.Types.ObjectId,
    ref: 'Customer',
    required: [true, "Select a customer"]
  },

	_product: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: [true, "Select a product"]
  }

},{timestamps:true})

mongoose.model('Order', OrderSchema);
