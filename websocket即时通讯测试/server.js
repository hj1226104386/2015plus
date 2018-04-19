/**
 * Created by huangjin on 2018/4/9 0009.
 */
//服务器及页面响应部分
var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server); //引入socket.io模块并绑定到服务器
app.get('/', express.static(__dirname + '/www'));
server.listen(80);
console.log('服务启动了，端口是80');

//socket部分
var usersOnLine = [];
io.on('connection', function(socket) {
    // 拿到昵称，判断是否重复
    socket.on('setNickName',function (nickName) {
        if(usersOnLine.indexOf(nickName)>-1){
            socket.emit('nickNameExisted',nickName);
        }else{
            socket.userIndex = usersOnLine.length;
            socket.nickName = nickName;
            usersOnLine.push(nickName);
            socket.emit('nickSuccess', nickName, usersOnLine.length, 'login');
            io.sockets.emit('system', nickName, usersOnLine.length, 'login');// 向全部客户端发送当前用户昵称
        }
    });
    //断开连接的事件
    socket.on('disconnect', function() {
        //将断开连接的用户从users中删除
        usersOnLine.splice(socket.userIndex, 1);
        //通知除自己以外的所有人
        socket.broadcast.emit('system', socket.nickName, usersOnLine.length, 'logout');
    });
    //接收并处理客户端发送的sendMsg事件
    socket.on('sendMsg', function(msg) {
        //将消息输出到控制台
        console.log(msg);
        socket.emit('returnMsg','你刚刚发的消息内容是：'+msg);
    })
});