var http = require('http'),
fs = require('fs'),
url = require('url'),
port = 8080;

/* Global variables */
var listingData, server;

var requestHandler = function(request, response) {
var parsedUrl = url.parse(request.url);


if (parsedUrl.pathname == '/listings'){
let rawdata = fs.readFileSync('listings.json');
let listingData = JSON.parse(rawdata);

response.end(JSON.stringify(listingData));

} else {
    response.writeHead(404, {"Content-Type": "text/plain"});
  	response.write('Bad gateway');
  	response.end();
}
};



// a server is created, but not started
var server = http.createServer(requestHandler);

// the server is now started, listening for requests on port 8080 - go to your browerd and paste in http://127.0.0.1:8080
server.listen(port, function() {
//once the server is listening, this callback function is executed
console.log('Server listening on: http://localhost:' + port + '/listings');
});
console.log('Is the server started?');



fs.readFile('listings.json', 'utf8', function(err, data) {
if (err) throw err;
listingData = data;

});


