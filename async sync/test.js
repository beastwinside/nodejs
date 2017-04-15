var fs=require("fs");

//异步读取
fs.readFile('input.txt',function(err,data){
	if(err){
		return console.error(err);
	}
	console.log("异步读取"+data.toString());

});

// 同步读取
var data=fs.readFileSync('input.txt');
console.log("同步读取"+data.toString());
console.log("程序执行完毕");



// 获取文件信息fs.stat(path, callback)


// 写入文件

console.log("准备打开文件！");
fs.writeFile('input.txt','writevalue',function(err){
	if(err){
		return console.log(err);
	}
	console.log("数据写入成功");
	console.log("---我是分割线---");
	console.log("读取写入的数据");

})



// 读取文件fs.read(fd, buffer, offset, length, position, callback)


// 删除文件
console.log("准备删除文件！");
fs.unlink('input.txt', function(err) {
   if (err) {
       return console.error(err);
   }
   console.log("文件删除成功！");
});



// fs.rmdir("/temp");