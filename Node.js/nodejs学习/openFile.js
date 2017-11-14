/**
 * @author:huangjin
 * @parameter:
 * @description:
 * @Date:2017/11/13
 */
var fs = require('fs');
// 异步打开文件
fs.open('./input/input.txt','r+',function (err,fd) {
    if(err) return console.error(err);
    console.log('文件打开成功')
})