var fs=require("fs");
var zlib=require('zlib');

// 解压in
fs.createReadStream('input.txt.gz').pipe(zlib.createGunzip()).pipe(fs.createWriteStream('inputt.txt'));
console.log('解压完成');