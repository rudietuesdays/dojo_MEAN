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

/*********************************************/

// *web sockets*

// to install on project IN Terminal:
  // npm install socket.io --save

// with HTTP request and response, the client makes a request, the server processes the request and prepares and sends a response
// but what about with a chat room or a multiplayer game?
// with apps like these ^, the HTTP req/res cycle isn't enough
// *sockets*, unlike HTTP cycle, is a form of *non-blocking* communication
  // they allow the client and server to engage each other at the same time
  // socket connections do NOT use HTTP
  // sockets are *event-driven*
  // both the server and the client can *listen* for and *emit* events

// *emit*
// emitting is the act of signaling to the client or server that an event is occurring
// clients emit to the server, NOT to other clients
// server can emit in different ways
  // *emit* back directly to a client that triggered the event
  // *broadcast* sends an event to all sockets ~except~ for the socket connection that triggered the event
  // *full broadcast* goes to every single connected socket; to be clear: ANY client with a connection to the server via web sockets will get the event emitted by a full broadcast

// For any one specific socket action, there will be two associated steps
  // A listener for the event is present
  // An emit of the listened-for event to trigger the action

// write your socket commands in jQuery!
  // in your HTML script, make sure to require a file back to the socket module:
  <script type="text/javascript" src="/socket.io/socket.io.js"></script>
  <script type ="text/javascript">
    $(document).ready(function (){
      // this triggers the connection event in our server!
      var socket = io.connect();
      // we'll write all the socket stuff after the above line!
      $('button').click(function (){
        socket.emit("button_clicked", {reason: "because I want to learn about sockets!"});
      });
      socket.on('server_response', function (data){
        console.log('The server says: ' + data.response);
      });
    })
  </script>

  // then, in server.js:
  socket.on("button_clicked", function (data){
    console.log('Someone clicked a button!  Reason: ' + data.reason);
    // first param of .emit is a string -- this is how we name our custom events
    // second param of .emit is a *JSON object*
    socket.emit('server_response', {response: "sockets are the best!"});
  })

  // using emit, broadcast and full-broadcast
  io.sockets.on('connection', function (socket) {
    //  EMIT:
    socket.emit('my_emit_event');
    //  BROADCAST:
    socket.broadcast.emit("my_broadcast_event");
    //  FULL BROADCAST:
    io.emit("my_full_broadcast_event");
  })
