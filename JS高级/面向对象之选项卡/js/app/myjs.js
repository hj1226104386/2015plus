/**
 * Created by ICE on 2016/11/23.
 */

//1.分析对象
//2.对象的功能和属性
//3.完善对象的功能和属性

//1.创建对象
function tapSelector(parent){
    //将用户传进来的父容器保存在内存中;转成jQuery对象;
    this.parent = $(parent);
    //页面加载出现的内容
    this.init();
};

//2.重写原型对象
tapSelector.prototype = {
    constructor:tapSelector,
    //预加载页面;第一次加载页面的内容;
    init: function () {
        this.renderDom();
        this.bindEvents();
    },
    //渲染dom
    renderDom: function () {
        //首先定义一个容器
        this.$container = $("<div class='tapContainer'></div>")
            .append("<div class='tap-top'>" +
            "<a href='javascript:;'>首页</a>" +
            "<a href='javascript:;'>新闻</a>" +
            "<a href='javascript:;'>国际</a>" +
            "</div>")
            .append("<div class='tap-bottom'>" +
            "<div class='current'>啊哈啊哈哈哈哈111</div>" +
            "<div>啊哈啊哈哈哈哈222</div>" +
            "<div>啊哈啊哈哈哈哈333</div>" +
            "</div>")

        this.$container.appendTo(this.parent);

    },
    //添加事件
    bindEvents: function () {
        $(".tap-top").children().on("click", function () {
            var index = $(this).index();
            $(this).css("backgroundColor","pink").siblings().css("backgroundColor","orange");
            $(".tap-bottom").children().eq(index).show().siblings().hide();


        })

    }
};