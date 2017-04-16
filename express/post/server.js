var express=require('express');
var app=express();


//尝试不引入body-parser包
var bodyParser=require('body-parser');

var urlencodeParser=bodyParser.urlencoded({extended:false});


app.use(express.static('public'));

app.get('/post.html', function (req, res) {
   res.sendFile( __dirname + "/" + "post.html" );
});

app.post('/process_post',urlencodeParser,function(req,res){
// 设置响应头!!!!!必要，。不然·中文显示乱码
	res.writeHead(200,{'Content-Type':'text/plain;charset=utf-8'});
	// 输出JSON 格式
	response={
		fisrt_name:req.body.firstname,
		last_name:req.body.lastname
	};

	console.log(response);
	res.end(JSON.stringify(response));
});


var server=app.listen(8088,function(){
	var host=server.address().address;
	var port=server.address().port;

	console.log("应用实例，访问地址为http://%s:%s",host,port);

})