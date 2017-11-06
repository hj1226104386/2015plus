/**
 * @author:huangjin
 * @parameter:
 * @description:
 * @Date:2017/9/4
 */
//配置require
require.config({
    paths: {
        jquery: '../lib/jquery',
        bootstrap: '../lib/bootstrap',
        modal: '../modal'
    },
    //设置依赖关系
    shim: {
        bootstrap: {
            deps: ['jquery']
        }

    }
});
//引入依赖
require(['./addText', '../modal'], function(add, m) {
    add.func();
    console.log(add.text);
    console.log(m.text);
});