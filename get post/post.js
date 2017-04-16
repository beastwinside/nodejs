// var http=require('http');
// var querystring=require('querystring');

// http.createSever(function(req,res){
//  	var post='';

//  	//通过req的data事件监听事件函数，
//  	// 每当接受请求提数据，就累加到post变量中




//  	// 监听器on事件每次触发data时都会触发，data事件：有数据可读时
//  		req.on('data',function(chunk){
//  			post+=chunk;
//  		})；

//  		// 在end事件触发时，用querystring.parse将post解析为真正的post的请求，
//  		// 再返回

//  		req.on('end',function(){
//  			post=quertstring.parse(post);
//  			res.end(util.inspect(post));

//  		});

// }).listen(3000);

var http = require('http');
var querystring = require('querystring');
 
var postHTML = 
  '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
  '<body>' +
  '<form method="get">' +
  '网站名： <input name="name"><br>' +
  '网站 URL： <input name="url"><br>' +
  '<input type="submit">' +
  '</form>' +
  '</body></html>';
 
http.createServer(function (req, res) {
  var body = "";
  req.on('data', function (chunk) {
    body += chunk;
  });
  req.on('end', function () {
    // 解析参数
    body = querystring.parse(body);
    // 设置响应头部信息及编码
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
 
    if(body.name && body.url) { // 输出提交的数据
        res.write("网站名：" + body.name);
        res.write("<br>");
        res.write("网站 URL：" + body.url);
    } else {  // 输出表单
        res.write(postHTML);
    }
    res.end();
  });
}).listen(3000);