var http=require('http');
var url=require('url');
var util=require('util');


// 建立服务器监听3000


//req=request请求头，res=response响应头 
http.createServer(function(req,res){
 	res.writeHead(200,{'Content-Type':'text/plain;charset=utf-8'});

 	//解析请求头requrl参数v
 	var params=url.parse(req.url,true).query;
 	// 写响应头res参数
 	res.write("网站名："+params.name);
 	res.write("\n");
 	res.write("网站 url:"+params.url);
 	
 	
 	res.end();

}).listen(3000);