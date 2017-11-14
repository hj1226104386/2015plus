// 在nodejs中，全局对象是global
//     console.log(this===global); // true


// 异步
/*
console.log('hello')
setTimeout(function () {
    console.log('world');
},5000)
console.log('拜拜')*/

/*console.log(1)
process.nextTick(function () {
    console.log(3)
})
console.log(2)*/


var http = require('http');
http.createServer(function (req,res) {
    res.writeHead(200,{'Content-Type':"text/html"});
    res.end('hello,word!你好啊')
}).listen(8000)
console.log('服务已启动')
