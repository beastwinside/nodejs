var fs=require("fs");
var data='';

// 创建可读流
var readerStream=fs.createReadStream('input.txt');
//fs.createreadstream就是在读取input.txt
//设置编码为utf8
readerStream.setEncoding('UTF8');

//处理流事件

// data有数据可读时候触发
// 这种风格的函数要有额外的参数：“后续逻辑体”，
// 比如带一个参数的函数。CPS函数计算出结果值后并不是直接返回，
// 而是调用那个后续逻辑函数，并把这个结果作为它的参数。
// 从而实现计算结果在逻辑步骤之间的传递，以及逻辑的延续。也就是说如果要调用CPS函数，
// 调用方函数要提供一个后续逻辑函数来接收CPS函数的“返回”值
readerStream.on('data',function(xx){
	data +=xx;
});

readerStream.on('end',function(){
console.log(data);

});

readerStream.on('error',function(err){
console.log(err.stack);

});

console.log("程序执行完毕");