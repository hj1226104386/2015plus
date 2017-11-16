/**
 * @author:huangjin
 * @parameter:
 * @description:
 * @Date:2017/11/14
 */

var User = require('../models/user');

// 首页
module.exports.home = function (req, res) {
  res.render('home', {title: '首页'});
};
// 用户中心
module.exports.users = function (req, res) {
  res.render('users', {title: '用户中心'});
};
// 关于我们
module.exports.about = function (req, res) {
  res.render('about', {title: '关于我们'});
};
// 登录
module.exports.login = function (req, res) {
  var body = req.body;
  var params = {
    username: body.username,
    tel: body.tel
  };

  // 传入实例属性
  var userdb = new User(params);

  userdb.login(function (result) {
    var msg = '';

    if (result.length === 0) {
      msg = '用户名不存在';
    } else {
      msg = '登录成功';
    }
    res.json({
      code: 200,
      data: result,
      msg: msg
    });
  });
};
// 前面路由都没有匹配上都统一由404页面返回
module.exports.notFound = function (req, res) {
  res.send('哇哦，找不到页面了');
};
