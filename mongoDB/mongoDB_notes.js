// *CRUD* methods in MongoDB

// *Create*
  // Pattern:
  db.COLLECTION_NAME.insert({YOUR_JSON_DOCUMENT})
  // Example:
  db.ninjas.insert({name: "Trey", belt: "black", status: "awesome"})

// *Read*
  // the paramater here is a *document*
  // only documents that match that query will be returned
  // Pattern:
  db.COLLECTION_NAME.find({YOUR_QUERY_DOCUMENT}
  // Example:
  db.ninjas.find({name: "Trey"})

// *update*
  // Pattern:
  db.COLLECTION_NAME.update({QUERY}, {FIELDS_TO_UPDATE}, {OPTIONS})

  // by defautlt, without specifying options, MongoDB's native update method will completely overwrite everything except the _id field when we run the way shown below:
  // Example:
  db.ninjas.update({name: "Trey"}, {location: "Mountain View"}) // this will OVERWRITE the info already there (name: "Trey") with location: "Mountain View"

  // to avoid overwrite:
  // Example:
  db.ninjas.update({name: "Trey"}, {$set: {location: "Mountain View"}})

// *destroy*
  // Pattern:
  db.COLLECTION_NAME.remove({YOUR_QUERY_DOCUMENT}, BOOLEAN)

  // Example
  db.ninjas.remove({belt: "yellow"})
  db.ninjas.remove({belt: "yellow"}, false) // this sets the param justOne to = false; this is the default; if true, the query will remove *only the first* entry of this kind

// *find*
  // to find all of the collection, pass an empty obj to .find()
  // Examples:
  db.ninjas.find({}).pretty()
  db.ninjas.find().pretty()

// query by ID
  // You can't just pass the string of characters, you must pass it as an ObjectId
  // Example:
  db.ninjas.find({_id: ObjectId("5462a78e514e258182f4c69a")})

  // if you want to sort by something like creation time in MongoDB, you can sort by ObjectId because it is made by using a time stamp as part of the string

/**************************************/

// *operators*

// allow you to make queries like greater than, less than, etc

//operators:
  // $gt => greater than
    db.dojos.find({number_of_students: {$gt: 15}})
  // $gte => greater than or equal to
  // $lt => less than
  // $lte => less than or equal to
  // $in => a particular value in an array
  // $push => add to an array contained w/in the document
    db.students.update({_id: ObjectId("5463d871a6a96d5ed6252f4d")}, {$push: {interests: 'snowboarding'}})
  // $pop => remove first or last element from array (-1 is first, 1 is last)
    db.COLLECTION.update({QUERY}, {$pop: {array_key: (1 or -1)}})
  // $addToSet => works like $push and ONLY adds to the array if it doesn't already exist in the array (prevent duplicates)
  // $pull => removes specific value w/in array
    db.COLLECTION.update({QUERY}, {$pull: {array_key: VALUE}})

/**************************************/

// *mongoose*
// mongoose is a node module that more easily connects MongoDB to a project

// in server.js
  var mongoose = require('mongoose');
  // if you connect to a db that doesn't exist yet, mongo will create it for you!
  mongoose.connect('mongodb://localhost/basic_mongoose');

// create schemas in mongoose:
  var UserSchema = new mongoose.Schema({
    name: {type: String},
    age: {type: Number}
  }, {timestamps: true})
  mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'User'
  var User = mongoose.model('User') // We are retrieving this Schema from our Models, named 'User'

/**************************************/

// mongoose commands

// to find all users:
User.find({}, function(err, users) {...})

// to find all users based on a query:
User.find({name:'Jessica'}, function(err, user) {...})

// to find one user:
User.findOne({}, function(err, user) {...})

// create and save a new user instance:
var userInstance = new User()
userInstance.name = 'Andriana'
userInstance.age = 29
userInstance.save(function(err){...})

// delete all users:
User.remove({}, function(err){...})

// delete one user:
User.remove({_id: 'insert record unique id here'}, function(err){...})

// update any records that match the query:
User.update({name:'Andrinnna'}, {name:'Andriana'}, function(err){
 // This code will run when the DB has attempted to update the matching record.
})
// another way to update a record:
User.findOne({name: 'Andriana'}, function(err, user){
 user.name = 'Andri'
 user.save(function(err){...})
})

/**************************************/

// *mongoose validations*

// require the mongoose module
var mongoose = require('mongoose');
// to make a model, you can first define a schema, which is just the BLUEPRINT for a model
var UserSchema = new mongoose.Schema({
    first_name:  { type: String, required: true, minlength: 6},
    last_name: { type: String, required: true, maxlength: 20 },
    age: { type: Number, min: 1, max: 150 },
    email: { type: String, required: true }
}, {timestamps: true });

// displaying validation errors on server.js:
app.post('/users', function (req, res){
    var user = new User(req.body);
    user.save(function(err){
        if(err){
            res.render('index', {title: 'you have errors!', errors: user.errors})
        }
        else {
            res.redirect('/users');
        }
    });
})

//displaying validation errors on index.ejs:
<% if(typeof(errors) != 'undefined' ) { %>
    <% for (var x in errors) { %>
     <h3><%= errors[x].message %></h3>
    <% } %>
<% } %>

// native mongoose validation example:
UserSchema.path('email').required(true, 'User email cannot be blank');

/**************************************/

// *associations*
// make sure you first create your *schemas* for the models you plan to associate!

//example of a one-to-many association:
  var Schema = mongoose.Schema;
  var postSchema = new mongoose.Schema({
   text: { type: String, required: true },
   comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}] // notice that this document is an array and the ref: to Comment
  }, { timestamps: true });

  var commentSchema = new mongoose.Schema({
   _post: {type: Schema.Types.ObjectId, ref: 'Post'}, // notice '_post' and the ref:
   text: { type: String, required: true },
  }, {timestamps: true });

  //** as an FYI, 'Comment' is a reserved word sometimes in JS, so don't use that to name your Model

  // to show a post with all its comments in server.js:
  app.get('/posts/:id', function (req, res){
    Post.findOne({_id: req.params.id})
    // .populate grabs all the comments using their id's stored in the comment property array of the post document
    .populate('comments')
    .exec(function(err, post) {
      res.render('post', {post: post});
        });
      });

  // to update one side of the one-to-many asssoc, both must be updated:
  app.post('/posts/:id', function (req, res){
    Post.findOne({_id: req.params.id}, function(err, post){
      var comment = new Comment(req.body); // req.body pulls data from form on the front end
      //  set the reference like this:
      comment._post = post._id;
      comment.save(function(err){     // save comment to the DB
        post.comments.push(comment);
        post.save(function(err){      // save post to the DB
           if(err) {
              console.log('Error');
           } else {
              res.redirect('/');
           }
         });
       });
    });
  });

// this process works for one-to-many and one-to-one relationships. if you need to build a many-to-many relationship, you probably shouldn't be using mongo

/**************************************/

// *embedding documents*
// great practice for nesting docs in other docs!
// for example, turn this:
  {
   _id: "dojo",
   name: "CodingDojo"
  }
  {
   business_id: "dojo",
   street: "10777 Main Street",
   city: "Bellevue",
   state: "WA",
   zip: "98004"
  }
  {
   business_id: "dojo",
   street: "1980 Zanker Road",
   city: "San Jose",
   state: "CA",
   zip: "95112"
  }
// into this:
  {
    name: "CodingDojo",
    locations: [
      {
        street: "10777 Main Street",
        city: "Bellevue",
        state: "WA",
        zip: "98004"
      },
      {
        street: "1980 Zanker Road",
        city: "San Jose",
        state: "CA",
        zip: "95112"
      }
    ]
  }
   //saves you from having to query for _id and business_id every time
