// get http module, fs module and set the port
var fs = require('fs'),
    http = require('http'),
    port = 7077;

// creating a server using http module:
var server = http.createServer(function (request, response){
    // see what URL the clients are requesting (this is a callback fx!):
    console.log('client request URL: ', request.url);
    // if the request matches a route response pattern built into the server, prepare and serve the associated response
    if(request.url === '/cars') {
        fs.readFile('./imgs/vroom.gif', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/gif'});  // send data about response
            response.write(contents);  //  send response body to client
            response.end(); // finished!
        });
    }
    else if (request.url === "/cats") {
      fs.readFile('./imgs/mrow.gif', function (errors, contents){
        response.writeHead(200, {'Content-type': 'image/gif'});
        response.write(contents);
        response.end();
      });
    }
    else if (request.url === "/cars/new") {
      fs.readFile('./views/cars.html', 'utf8', function (errors, contents){
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
server.listen(port, function(){
  console.log("Running on port: ", port);
});
