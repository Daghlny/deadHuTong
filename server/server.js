var http = require("http");
var url = require("url");

var server = http.createServer(function(request, response){
  response.write(request);
  response.end();
});

server.listen(8011);
console.log("Server is listening");
