var express=require('express');
var app=express();


app.use(express.static('public'));

//主页输出"helloworld ss

app.get('/',function(req,res){

console.log("主页 get请求");
res.send("hello get");
})


//post 请求
app.post('/',function(req,res){
	console.log('主页 post请求');
	res.send('hello post')

})

//  /del_user页面响应
app.get('/del_user',function(req,res){
	console.log("/del_user 响应 delete请求");
	res.send('删除页面');

})

//list_user 页面的GET请求
app.get('/list_user',function(req,res){
	console.log("/list_user get 请求");
	res.send('用户列表页面');

})

//对页面 abcd,abxcd,ab123cd，等响应GEt请求
app.get('/ab*cd',function(req,res){
	console.log("/ab*cd get请求");
	res.send('正则匹配');

})


var server=app.listen(8081,function(){
   var host=server.address().address;
   var port=server.address().port;

    console.log("应用实例，访问地址为htpp://%s:%s",host,port)


})