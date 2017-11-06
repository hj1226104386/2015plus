/**
 * Created by huangjin on 2017/3/7.
 */
"use strict";
const express = require('express');
const app = express();//app是express对象的一个实例;
const path = require('path');
const router = express.Router();//路由对象;

//配置路由
app.use('/getdata',(req,res)=>{
    res.json({
        "message":[
            {
                "name":"张三",
                "grade":"三(8)班",
                "age":"18",
                "gender":"man",
                "hometown":"孝感"
            },
            {
                "name":"黄锦",
                "grade":"三(8)班",
                "age":"18",
                "gender":"woman",
                "hometown":"咸宁"
            },
            {
                "name":"李四",
                "grade":"三(8)班",
                "age":"18",
                "gender":"man",
                "hometown":"深圳"
            },
            {
                "name":"王五",
                "grade":"三(8)班",
                "age":"18",
                "gender":"woman",
                "hometown":"咸宁"
            },
            {
                "name":"中国",
                "grade":"三(8)班",
                "age":"18",
                "gender":"man",
                "hometown":"武汉"
            },
            {
                "name":"美国",
                "grade":"三(8)班",
                "age":"52",
                "gender":"woman",
                "hometown":"北京"
            }
        ]
    });
});



//静态资源处理
app.use(express.static(path.join(__dirname,'../')));


//开启监听服务
app.listen(3000,()=>{
    console.log('服务器启动啦');
})