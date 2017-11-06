/**
 * Created by huangjin on 2017/6/24.
 * Common:公用构造函数
 * constructor：指向构造函数本身
 * init:初始化
 * renderDOM：页面初始化
 * bindEvents:事件绑定
 */


function Common() {
    this.init();
};
//构造函数+重写原型  继承
Common.prototype = {
    constructor:Common,
    init:function () {
        this.renderDOM();
        this.bindEvents();
    },
    renderDOM:function () {
        //读取localStorage信息,填充用户信息
        //首先我们需要判断浏览器是否支持localStorage这个属性
        if(!window.localStorage){
            alert("您的浏览器不支持localstorage，请升级浏览器！");
            return false;
        }else{
            var getUserInfo = JSON.parse(localStorage.getItem('userInfo'));
            $('.h-username').text(getUserInfo.name);
            if (getUserInfo.logo) {
                $('.h-avatar').prop('src', getUserInfo.logo);
            } else {
                $('.h-avatar').prop('src', '${base}/assets/images/avatar.png');
            };
        };
    },
    bindEvents:function () {
        //退出登录
        this.logout();
    },
    logout:function () {
        $('.logout').click(function () {
            window.location.href = baseUrl+"/logout";
            //清空localStorage数据
            localStorage.clear();
        })
    }

};
var common = new Common();