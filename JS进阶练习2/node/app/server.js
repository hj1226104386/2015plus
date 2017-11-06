/**
 * Created by huangjin on 2017/3/4.
 */
"use strict";
const express = require('express');//引入express
const app = express();//实例化express
const router = express.Router();
const path = require('path');




app.get('/query',function (req,res) {
    res.json({
        'message':[
            {'name':'黄锦',
              'age':18,
              'gender':'男'
            },
            {'name':'刘德华',
                'age':28,
                'gender':'男'
            },
            {'name':'张国荣',
                'age':33,
                'gender':'男'
            },
            {'name':'范冰冰',
                'age':44,
                'gender':'女'
            },
            {'name':'张三',
                'age':15,
                'gender':'男'
            },
            {'name':'李四',
                'age':23,
                'gender':'男'
            },
            {'name':'王五',
                'age':25,
                'gender':'女'
            }
        ]
    });
});


//错误处理中间件
app.use(function (err,req,res,next) {
    if(err){
        res.status(500).send('服务器要崩溃啦');
    }else{
        throw err;
    }
});



//静态文件处理
app.use(express.static(path.join('../')));


//开启监听服务
app.listen(3000,()=>{
    console.log('服务器启动啦');
});