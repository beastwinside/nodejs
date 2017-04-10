var http=require("http");

http.createServer(function(request,response){
	response.writeHead(200,{"Content-Type":"text/plain"});
	response.write("Hello World");
	response.end();
}).listen(8888);


// 注：如果匿名函数作为函数参数，而在匿名函数中无return
// ，则此时返回的是匿名函数本身

// 开服务器就是这么简单