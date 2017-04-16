var express=require('express');
var app=express();
var fs=require("fs");

var bodyParser=require('body-parser');
var multer=require('multer');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(multer({dest:'/tmp/'}).array('image'));


app.get('/upload.html', function (req, res) {
   res.sendFile( __dirname + "/" + "upload.html" );
   // var form = fs.readFileSync('./form.html', {encoding: 'utf8'});
    // res.send(form);
});


app.post('/file_upload',function(req,res){
	console.log(req.files[0]); //上传的文件信息

	var des_file=__dirname+"/"+req.files[0].originalname;

	// readfile 第一个参数文件路径，第二个回调函数
	fs.readFile(req.files[0].path,function(err,data){
		fs.writeFile(des_file,data);
	});
});
		
		//自改简易版文件上传。减少了报错提醒，方便学习



var server=app.listen(8081,function(){

	var host=server.address().address;
	var port=server.address().port;

	console.log("应用实例,访问地址为http://%s:%s",host,port)
})