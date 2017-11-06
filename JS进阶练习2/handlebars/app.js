/**
 * @author:huangjin
 * @parameter:
 * @description:
 * @Date:2017/5/10
 */

"use strict";

const express = require('express');
const exphbs  = require('express-handlebars');

const app = express();
const hbs = exphbs({
    defaultLayout: 'main',//设置主体文件
    partialsDir: 'views/another/', //设置其他部分目录路径
    extname: '.hbs' //这里后缀名的修改，app.engine也要修改一下

});//初始化获取对象,配置handlebars的基本设置
app.engine('hbs', hbs);
app.set('view engine', 'hbs');

app.get('/', function (req, res) {
    res.render('home');
});
app.get('/center', function (req, res) {
    res.render('center');
});

app.listen(8000,()=>{
    console.log('服务器启动啦');
})
