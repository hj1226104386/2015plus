/**
 * @author:huangjin
 * @parameter:
 * @description:
 * @Date:2017/11/13
 */
var fs = require('fs');
// 创建一个可读流
var readerStream = fs.createReadStream('./input/node.pdf');
// 创建一个可写流
var writerStream = fs.createWriteStream('./output/node.pdf');
// 读取input.txt中的内容并写入到output.txt中
readerStream.pipe(writerStream);
console.log('文件复制完毕');