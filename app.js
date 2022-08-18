var http = require("http");


http.createServer(function (request, response) {
    if(request.url == '/')
   {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write("Up and running")
    response.end();
   } 
   else if (request.url == '/check'){
   response.writeHead(200, {'Content-Type': 'text/plain'});
   response.write("Health Check Succesful")
   response.end();
   }
 }).listen(8081);
 
 // Console will print the message
 console.log('Server running at http://127.0.0.1:8081/');