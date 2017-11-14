/**
 * @author:huangjin
 * @parameter:
 * @description:
 * @Date:2017/11/13
 */
var fs = require('fs')
// 异步读取
fs.readFile('./input/input.txt',function (err,data) {
    if(err) return console.error(err)
    console.log('异步读取：'+data.toString())
})
console.log('读取文件完毕')
