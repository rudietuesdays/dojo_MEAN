console.log('loading customer model...');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CustomerSchema = new Schema({

	name: {
		type: String,
		required: [true, 'Enter a customer name'],
		unique: [true, 'Customer already exists']
	},

},{timestamps:true});

CustomerSchema.path('name').validate(function(value, done) {
    this.model('Customer').count({ name: value }, function(err, count) {
        if (err) {
            return done(err);
        }
        // If `count` is greater than zero, "invalidate"
        done(!count);
    });
}, 'Customer already exists');

mongoose.model('Customer', CustomerSchema);
