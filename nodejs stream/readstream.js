var fs=require("fs");
var dataa='';

// 创建可读流
var readerStream=fs.createReadStream('input.txt');
//fs.createreadstream就是在读取input.txt
//设置编码为utf8
readerStream.setEncoding('uef8');

//处理流事件

// data有数据可读时候触发
readerStream.on('data',function(xx){
	data +=xx;
});

readerStream.on('end',function(){
console.log(data);

});

