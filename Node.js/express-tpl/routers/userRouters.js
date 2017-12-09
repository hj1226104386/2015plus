/**
 * @author:huangjin
 * @parameter:
 * @description:
 * @Date:2017/11/15
 */
var express = require('express');
var router = express.Router();
var userQuery = require('../controllers/userQuery');

// 路由
router.get('/', userQuery.home); // 首页
router.get('/users', userQuery.users); // 用户中心
router.get('/about', userQuery.about); // 关于我们
router.post('/login', userQuery.login); // 登录
// 前面路由都没有匹配上都统一由404页面返回
router.get('*', userQuery.notFound); // 首页

// 暴露接口
module.exports = router;
