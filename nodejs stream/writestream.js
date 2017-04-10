var fs=require("fs");
var data='成功写入数据，writetream js';

// 创建一个写入流，写入到文件output.text
var writeStream=fs.createWriteStream('output.txt');

//使用utf-8编码写入数据
writeStream.write(data,'UTF8');

//标记文件末尾
writeStream.end();

// 处理流事件
writeStream.on('finish',function(){
console.log('写入完成');
});

// 读取报错时候提醒
writeStream.on('error',function(err){
console.log(err.stack);
});

console.log("程序执行完毕");



