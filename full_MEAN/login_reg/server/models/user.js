console.log('loading user model...');
var mongoose = require('mongoose');
var bcrypt = require('bcrypt')
var Schema = mongoose.Schema;

var userSchema = new Schema({
    first: {
      type: String,
      required: [true, 'enter your first name'],
      trim: true,
    },

    last: {
      type: String,
      required: [true, 'enter your last name'],
      trim: true
    },

  email: {
    type: String,
    required: [true, 'enter email address'],
    unique: [true, "user already exists"],
    validate: {
      validator: function( value ){
        return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test( value );
      },
      message: "enter a valid email address"
    }
  },

  password: {
    type: String,
    required: [true, 'enter a password'],
    minlength: 8,
    maxlength: 32,
    validate: {
      validator: function( value ) {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test( value );
      },
      message: "Password failed validation, you must have at least 1 number, uppercase and special character"
    }
  },

  birthday: {
    type: Date,
    required: [true, 'enter your birthday']
  },

}, {timestamps:true});

userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

userSchema.pre('save', function(done) {
    this.password = this.generateHash(this.password);
    console.log(this.password);
    done();
});

mongoose.model('User', userSchema);
