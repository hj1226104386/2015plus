/**
 * @author:huangjin
 * @parameter:
 * @description:
 * @Date:2017/9/4
 */
require.config({
    paths:{
        jquery:'../lib/jquery',
        bootstrap:'../lib/bootstrap',
    }
})
//addText
define(['jquery','bootstrap'],function () {
    var addText = function () {
        $('.btn').click(function () {
            $('.box').text('我刚刚点击了按钮');
            $('#MyModal').modal();
        });
    };
    return {
        func:addText,
        text:'啊哈哈，我来自addText'
    };
});