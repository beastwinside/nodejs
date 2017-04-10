var fs=require('fs');

var readerStream=fs.createReadStream('input.txt');

var writeStream=fs.createWriteStream('output.txt');

// 管道读写操作
// 读取input内容到output
readerStream.pipe(writeStream);
console.log("程序执行完毕");