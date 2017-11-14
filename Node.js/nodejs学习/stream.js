/**
 * @author:huangjin
 * @parameter:
 * @description:
 * @Date:2017/11/13
 */
var fs = require('fs');
var data = '';
// 创建可读流
var readerStream = fs.createReadStream('./input.txt');
// 设置编码为utf-8
readerStream.setEncoding('UTF8');
// 处理流事件
readerStream.on('data',function (chunk) {
    data +=chunk;
})
readerStream.on('end',function () {
    console.log('结束啦：'+data)
})
readerStream.on('error',function (err) {
    console.log(err)
})
console.log('文件读取完毕')


var data1 = '这里是武昌理工学院广播台';
// 创建一个可以写入的流，写入到output.txt文件中
var writerStream = fs.createWriteStream('./output.txt');
// 设置使用utf8写入数据
console.log('数据为：'+data)
writerStream.write(data,'UTF8');
// 标记文件末尾
writerStream.end();
// 处理写入文件事件流
writerStream.on('finish',function () {
    console.log('文件写入完成')
})
writerStream.on('error',function (err) {
    console.log('出错啦：'+err);
})
console.log('文件写入完毕')