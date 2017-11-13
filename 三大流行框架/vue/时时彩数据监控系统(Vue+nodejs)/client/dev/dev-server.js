/**
 * Created by huangjin on 2017/3/9.
 */

"use strict";
const express = require('express');
const app = express();//app是express对象的一个实例
const path = require('path');
// const http = require('http');
const proxy = require('http-proxy-middleware');//代理转发中间件


//处理静态资源
app.use(express.static(path.join(__dirname, '../')));
//测试用静态资源,测试完删除
app.use('test',express.static(path.join(__dirname, '../test/')));


//处理请求转发
app.use('/queryone', proxy({target: 'http://buy.cqcp.net/Game/GetNum.aspx?iType=11&name=0.026916140239718224', changeOrigin: true}));
app.use('/ssc', proxy({target: 'http://localhost:9000', changeOrigin: true}));


//处理请求测试 原生的这种写法太麻烦,一个请求还要写一个转发,可以用express的一个代理转发中间件
/*app.get('/query', (req, res, next) => {
    http.get('http://buy.cqcp.net/Game/GetNum.aspx?iType=11&name=0.026916140239718224', response => {
        let data = '';
        response.on('data', chunk => {
            data += chunk;
        });
        response.on('end', () => {
            res.send(data);//写回数据
        })
    })
});*/

//启动监听
app.listen(8000, () => {
    console.log("中间层服务器启动啦...");
});