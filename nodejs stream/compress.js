var fs=require("fs");
var zlib=require('zlib');

// 压缩input.TXT 文件为input。text.gz
fs.createReadStream('input.txt').pipe(zlib.createGzip()).pipe(fs.createWriteStream('input.txt.gz'));
console.log("文件压缩完成。");