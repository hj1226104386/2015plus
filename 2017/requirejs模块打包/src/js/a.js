/**
 * @author:huangjin
 * @parameter:
 * @description:
 * @Date:2017/11/17
 */
//配置require
require.config({
    // baseUrl:'.src/',
    paths:{
        jquery:'https://apps.bdimg.com/libs/jquery/2.1.4/jquery.min',
        bootstrap:'lib/bootstrap',
    }
});
require(['jquery','./src/js/b.js'],function ($,b) {
    // console.log($);
    console.log(b);
    $('.btn').click(function () {
        alert('点击按钮了');
    })
})