/**
 * Created by huangjin on 2017/3/10.
 */
"use strict";
const express = require('express');
const app = express();//app是express的一个实例
const operation = require('./routes/operateData.js');//引入数据操作路由模块
const bodyParser = require('body-parser');//引入body-parser模块-解析请求体数据

//解析请求数据要在路由之前进行
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());



//挂载数据操作路由模块
app.use('/ssc',operation);

//配置全局错误处理中间件
app.use((err,req,res,next)=>{
    //返回一个错误信息
    res.json({
        err_code:500,
        err_message:err.message
    })

});


//启动监听服务
app.listen(9000,()=>{
    console.log('后台服务器启动成功..');
});