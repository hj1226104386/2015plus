/**
 * @author:huangjin
 * @parameter:
 * @description:
 * @Date:2017/11/15
 */
"use strict";
const db = require('./db');

// 定义一个构造函数，在构造函数原型中扩展不同的操作，在这里只做数据库查询工作，其他操作在控制器中
function User(params) {
    this.username = params.username;
    this.tel = params.tel;
}
// 扩展查询方法
User.prototype = {
  constructor:User,
    login:function (callback) {
        db.query('SELECT * FROM users WHERE username = ?',[this.username],callback)
    }
}


// 暴露User构造函数接口，方便其他地方调用
module.exports = User;