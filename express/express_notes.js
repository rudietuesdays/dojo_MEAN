// *Express*
// Express is a framework for Node.js that allows us to more easily handle requests and build a robust server

/*********************************************/

// IN Terminal:
  // npm init -y //
  // npm install express ejs body-parser --save

// the command 'npm init' tells bash this is an NPM-based project
// -y says to fill the package.json file with base info

// copying dependencies from one proj to another is easy
  // IN Terminal
    // npm install
  // when not passed any special info, npm install will look for a package.json file and install everything there already


/*********************************************/

// Views
// EJS (Embedded JavaScript) is a templating engine
// make sure to install the ejs node module to use it in your project

// The <% %> tags are the delimiter for the embedded JavaScript in a .ejs file
// Using these tags allows us to run JavaScript code that can be embedded into the HTML document we are making
// Notice the <% %> tags allow us to enter JavaScript code, and the <%=  %> tags actually print the JavaScript code to the document

/*********************************************/

// GET and POST

// In Express we will assign all of our routing rules using the syntax:
app.HTTP_VERB('URL', function (req, res){});  // HTTP_VERB is either 'get' or 'post' etc...

// in a RESTful env, we might use some of the following routes to create a new user:
// root route
app.get('/', function (req, res){
  res.render('index', {title: "my Express project"});
});
// route to process new user form data:
app.post('/users', function (req, res){
  //code to add user to db goes here!
  // redirect the user back to the root route:
  res.redirect('/');
})

/*********************************************/

// *session*

// session data is almost never used in MEAN
// however, if you do need it, you must install it
  // IN Terminal npm install express-session

/*********************************************/

// package managers
// package.json, bower.json

// package mgrs like *NPM* and *Bower* keep track of modules used through JSON files
// these files generally contain info about the overall project, included modules downloaded for the proj
// these files also minimize the need for copying all dependent modules if the proj moves to a new env (another machine, gitHub, etc)
