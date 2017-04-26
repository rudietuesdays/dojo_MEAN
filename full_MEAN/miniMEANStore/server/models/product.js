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

ProductSchema.path('name').validate(function(value, done) {
    this.model('Product').count({ name: value }, function(err, count) {
        if (err) {
            return done(err);
        }
        // If `count` is greater than zero, "invalidate"
        done(!count);
    });
}, 'Product already exists');

mongoose.model('Product', ProductSchema);
