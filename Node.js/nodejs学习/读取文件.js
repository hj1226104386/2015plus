/**
 * @author:huangjin
 * @parameter:
 * @description:
 * @Date:2017/11/13
 */

var fs = require('fs');


// 阻塞，同步
// var data = fs.readFileSync('./input.txt');
// console.log(data.toString());
// console.log('程序执行结束')

// 非阻塞，异步
fs.readFile('./input.txt',function (err,data) {
    if(err) return console.error(err);
    console.log(data.toString());
})
console.log('文件读取结束')