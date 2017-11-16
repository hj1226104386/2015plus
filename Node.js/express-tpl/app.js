/**
 * @author:huangjin
 * @parameter:
 * @description:
 * @Date:2017/11/14
 */
var express = require('express');
var app = express();
var path = require('path');
var handlebars  = require('express-handlebars');
var bodyParser = require('body-parser')
var userRouters = require('./routers/userRouters')

// 解析body请求体
app.use(bodyParser.urlencoded({ extended: false }))


// 设置模板引擎
let hbsObj = handlebars({ //构建hbs对象
    layoutsDir:"views/layout/",
    defaultLayout: 'main', //设置主体部分
    partialsDir: 'views/parts', //设置重用头尾部分
    extname: '.hbs' // 设置这个以后，app.engine名字要一致，因为express需要在rander的时候查找
});

// 注册hbs的helper来扩展功能，这里要动态的把每个组件引用的css和js动态的在主页面中加载出来
/*hbsObj.registerHelper('css',function (str,option) {
    var cssList = this.cssList || [];
    this.cssList.push(str);
})*/

//设置模板引擎
app.engine('hbs', hbsObj);
//设置express的渲染时用的模板
app.set('view engine', 'hbs');

// 托管静态资源
app.use('/public',express.static(path.join(__dirname,'public')));
app.use(express.static(path.join(__dirname,'views')))


// 错误处理中间件
app.use(function (err,req,res,next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
})

// 添加到路由中间件队列
app.use(userRouters)

app.listen(3000,function () {
    console.log('服务启动了，端口是：3000');
});