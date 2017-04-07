// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');

// creating a server using http module:
// this next line is crucial to creating the sever!!
var server = http.createServer(function (request, response){
    // see what URL the clients are requesting (this is a callback fx!):
    console.log('client request URL: ', request.url);
    // this is how we do routing:
    // if the request matches a route response pattern built into the server, prepare and serve the associated response
    // the following code captures just ONE request and ONE response
    if(request.url === '/') {
        // This command goes and finds a file by name and reads it.
        // param1 'index.html' is the name of the file; param2 'utf8' is the type of encoding of the file, param3 function()... is the callback to render the page
        fs.readFile('index.html', 'utf8', function (errors, contents){
            // this method sends headers and status code for the response
            // the *header* contais the specifics for the response
            // the *status code* tells the browser the response status; 200s and 300s are good, 400s and 500s are bad
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body to client
            // response might contain multiple chunks of data; this next line tells code to end:
            response.end(); // finished!
            // here are some other kinds of 'Content-Type':
            // CSS => {'Content-Type': 'text/css'}
            // JS => 	{'Content-Type': 'text/javascript'}
            // png/jpg/gif (image) => {'Content-Type': 'image/*'} (* is the image format, ie png or jpeg etc)
        });
    }
    else if (request.url === "/dojo.html") {
      fs.readFile('dojo.html', 'utf8', function (errors, contents){
        response.writeHead(200, {'Content-type': 'text/html'});
        response.write(contents);
        response.end();
      });
    }
    // if request didn't match anything, send back an error:
    else {
        response.writeHead(404);
        response.end('File not found!!!');
    }
});
// tell your server which port to run on
server.listen(6789);
// print to terminal window
console.log("Running in localhost at port 6789");
