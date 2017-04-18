var http = require('http');
var express = require('express');
var app = express();

app.use(express.static('public'));
 //妈的

app.get('/testt.html', function (req, res) {
   res.sendFile( __dirname + "/" + "testt.html" );
})
 
app.get('/', function (req, res) {
 
   

    res.writeHead(200, {'Content-Type': 'text/plain'});
   
   res.end("草草草草");
})
 

var server = app.listen(8081);

 // http.createServer(function(req, res){
 //  res.writeHead(200, {'Content-type' : 'text/plain;'});
 //  res.write("hello world");
 //  console.log('23');
 //  res.end();
 // }).listen(3000);