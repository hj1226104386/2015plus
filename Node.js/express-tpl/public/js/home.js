/**
 * @author:huangjin
 * @parameter:
 * @description:
 * @Date:2017/11/15
 */

$(function () {
    $('.login').click(function () {
        var $username = $('.username').val();
        var $tel = $('.tel-num').val();
        var $gender = $('.gender').val();
        var params = {
            username: $username,
            tel: $tel,
            gender: $gender
        };
        if(!$username||!$tel||!$gender){
            console.log(params)
            alert('请输入内容哦');
            return false;
        }

        $.post('/login',params, function (res) {
            var msg = res.msg;
            $('.tip').text(msg);
        })
    })
})