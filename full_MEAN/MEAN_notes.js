// *callbacks* and *promises*

// *callbacks* and/or *promises* are used to control the timing of code
// normally JavaScript will run block by block, a callback/promise moves a piece of code outside of that normal run order
// examples: Mongoose queries, Angular controllers, Angular factories
  // For Angular factories, the promise resolution occurs after the $http.verb(‘route’) with .then

// example *callbacks* problem:
/* Failed Example */
function buyDonut(){
  orderDonut();
  console.log('pay');
  console.log('walk out door');
}
/* function that gets a donut */
function orderDonut(){
  var x = setTimeout(function () {
    console.log('donut on counter');
  }, 10);
}
buyDonut();
/* Callback Example */
function buyDonut2(){
  orderDonut2(function whatToDoAfterDonutOnCounter(){
    console.log('pay');
    console.log('walk out door');
  });
}
/* function that gets a donut */
function orderDonut2(callback){
  var x = setTimeout(function () {
    console.log('donut is on counter');
    callback();
  }, 10);
}
buyDonut2();

// example *promise* problem
var beginDonutTransaction = new Promise(
  function(resolve,reject){
    var x = setTimeout(function () {
      console.log('donut is on counter');
      resolve();
    }, 10);
  }
);
beginDonutTransaction
.then(function(){
  //this is the resolve
  console.log('pay');
  console.log('walk out door');
})
.catch(function(){
  //this is the reject
  console.log("give me my donut!");
});

/************************************************/

// *MVC*

// *Express MVC*
  // *routes* file routes to different Mongoose controller methods
  // *controllers* files  dictate which data get returned using the response object (e.g. res.json()), often after communicating with a models file
    // they rely heavily on promises/callbacks to determine when data can be returned to the views
  // *models* files are blueprints to communicate with the db
    // can be used to do logic (like validations) prior to saving info
  // *mongoose* connection file connects to the db and loads all files with a .js extension found in the models folder

// *Angular MVC*
  // *app.js* - Angular Module file
    // usually includes providers (like ngRoute, ngCookies)
    // often includes .config specs, including the routeProvider which will generate routes that load partial views into the ng-view directive
  // *factories* files are singleton services that generate an object that can be *injected* into other directives (often into angular controllers)
    // can store local data and communicate with the server via $http requests caught by the routes file and generally return JSON info to the factory, handled by a promise
  // *controllers* integrate with factories and HTML (usually through *partial* views)
    // data is usually passed between controllers through a factory that is injected into both controllers

/************************************************/

// *login and registration in MEAN*

// You will need: 2 angular forms (one for login, one for reg)
  // 1 angular controller
  // 1 angular factory
  // a server (Node) with associated files including:
    // a user model (Mongoose), a user controller

// use *bcrypt* to generate a password hash
  var bcrypt = require('bcrypt');   // or 'bcryptjs' on some versions
  bcrypt.hashSync(password, bcrypt.genSaltSync(8));
  bcrypt.compareSync(password, this.password);

// reviewing model methods:
//basic model
var mongoose = require('mongoose');
var myModelSchema= new mongoose.Schema({
  name: {type:String},
  // more info here!
}, { timestamps: true});

//custom methods, pre, post etc. here
myModelSchema.methods.addJayToString = function(input){
  return input+"Jay";
}
/* What pre does prior to saving:
    Starting with an instance of our model:
      e.g.  var MyModel = mongoose.model('myModelName');
            var myModelInstance = new MyModel({name: "The Amazing "});
    When we try to save our model:
      e.g.  myModelInstance.save();
    Pre runs before saving.  In the example below: It would add "Jay to our current name ("The Amazing")" and "The Amazing Jay" would be stored in our DB.
*/
myModelSchema.pre('save', function(done){
  this.name = this.addJayToString(this.name);
  done();
});

/*
We can also call the methods e.g. addJayToString directly on the instance, if we didn't want to use 'pre'.  e.g.
      var MyModel = mongoose.model('myModelName');
      var myModelInstance = new MyModel({name: "The Amazing "});
      console.log(myModelInstance.addJayToString("hello "));
    This would just console.log "hello Jay";
*/

mongoose.model('myModel', myModelSchema);

/************************************************/

// *validations* and *error objects* in mongoose

// review error methods in back-end controller:
this.create = function(myData){
  var newThing = new Thing();
  // function(err,thing){} is a callback,
  // err is the first parameter, if there is an error with that method.
  newThing.save(function(err, thing){
    //do stuff with err and thing
  });
}

// a returned error object may look something like:
err = {
  errors:
    {
    schemaInThing_that_had_error:
      {
        message:"some string of errors",
        kind:"what didn't work",
        path:"reference to the schema's name",
        value:"cause of the initial error"
      }
    },
  name: "Validation error"
  }

// example of creating validations:
var mongoose       = require('mongoose'),
    Schema         = mongoose.Schema,
    customerSchema = new Schema({
      name: {
        first: {
          type: String,
          required: [true, "this is for something else"],
          trim: true,
        },
        last: {
          type: String,
          required: true,
          trim: true
        },
      },


      phone: {
        type: String,
        // these are custom validations:
        validate: [{
          validator: function( number ) {
            return /\d{3}-\d{3}-\d{4}/.test( number );
          },
          message: "{ VALUE } is not a valid phone number"
        },
        {
          // these are custom validations:
          validator: function( number ) {
            return false;
          },
          message: "{ VALUE } failed this validator"
        }
      ],
        required: [true, "Customer phone number required"]
      },


      gender_is_a_construct: {
        type: String,
        enum: ['MASC', 'FEMME'],
        uppercase: true,
        trim: true,
        default: "FEMME"
      },


      age: {
        type: Number,
        min: [18, "Maybe you need to be a little older"],
        max: [85, "You might want to be enjoying your retirement rather than using this site"],
        required: true
      },


      password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 32,
        // these are custom validations:
        validate: {
          validator: function( value ) {
            return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test( value );
          },
          message: "Password failed validation, you must have at least 1 number, uppercase and special character"
        }
      },


      pets: {
        type: [{
          type: Schema.Types.ObjectId,
          ref: "Pet"
        }],
        default: []
      }


      }, {
      timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
      }
    });


customerSchema.virtual( 'name.full' ).get( function () {
  return this.name.first + " " + this.name.last;
  // return `${ this.name.first } ${ this.name.last}`;
});

/************************************************/

// building strategies

// Before starting a larger project, make a plan of how you want to break the project into pieces you understand
// A good piece should be testable, some examples:
  // a) You could build out a server. Does it run?
  // b) You could add routes that return garbage JSON objects - when you go to the route does your garbage JSON show up?
// Making the plan: what does the client want?
  // a) What are all of the routes on any given page?
    // Can we place these routes into typical RESTful routes?
    // Do we need to create custom routes?
  // b) Are there pieces of the project that we don’t know how to accomplish? Are they critical or are they optional to the client?
    // if they are critical: figure out how to do them before starting the project
    // if they are optional: define a time frame where you try to figure them out, but don’t go too far down a rabbit hole
// When implementing each piece of the project:
  // Make a git branch,
  // test it,
  // if it works, merge it.
// Typical build strategies:
  // front end first, HTTP connections to dummy data
  // server and routes
  // database
// OR
  // database first
  // server and routes to the database
  // front-end with HTTP connections
