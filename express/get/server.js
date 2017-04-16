var express = require('express');
var app = express();
 //文件夹内东西相当于在服务器里面
app.use(express.static('public'));
 
 //可以直接通过127.0.0.1：8081/get.html直接访问
app.get('/get.html', function (req, res) {
   res.sendFile( __dirname + "/" + "get.html" );
})
 
app.get('/process_get', function (req, res) {
 
   // 输出 JSON 格式
   response = {
       first_name:req.query.firstname,
       last_name:req.query.lastname
   };
   console.log(response);
   res.end(JSON.stringify(response));
})
 
var server = app.listen(8081, function () {
 
  var host = server.address().address;
  var port = server.address().port;
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})