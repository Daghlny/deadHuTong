var http = require("http");
var url = require("url");

var server = http.createServer(function(request, response){
  response.write("hello, the server is responsing</br>");
  response.write(request);
  response.end();
});

server.listen(8011);
console.log("Server is listening");
