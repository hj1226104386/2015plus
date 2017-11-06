/**
 * Created by huangjin on 2017/6/23.
 */

$(function () {
    //登陆操作
    $('.doLogin').on('click', function () {
        var getUserName = $('input.username').val();
        var getPassword = $('input.password').val();
        if (getUserName && getPassword) {//都填写了
            $.ajax({
                type: 'POST',
                url: baseUrl+'/login',
                data: {username: getUserName, password: getPassword},
                dataType: 'json',
                beforeSend:function () {
                    //防止重复点击
                    $('.doLogin').text('登录中...').attr('disabled',true);
                },
                success: function (res) {
                    if (res.status == 1) {//登录成功
                    	var url = baseUrl + res.data.toMyCourse;
                        window.location.href = url;
                        //保存用户信息到localstorage
                        localStorage.setItem('userInfo',JSON.stringify(res.data));
                    } else {
                        $('.h-tip').show().text(res.message);//显示提醒信息
                        setTimeout(function () {
                            $('.h-tip').fadeOut();
                        }, 4000);
                    };
                    $('.doLogin').text('登录').attr('disabled',false);
                },
                error: function () {
                    alert("登陆失败");
                }
            });
        } else {
            $('.h-tip').show().text('请输入用户名或者密码');//显示提醒信息
            setTimeout(function () {
                $('.h-tip').fadeOut();
            }, 4000);
        }
    })
})