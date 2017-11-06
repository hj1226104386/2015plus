$(document).ready(function () {
        //新闻部分

        //点击图标 切换新闻列表
    var spans = $(".news-r-mid-l").find("span");
    var uls = $(".new-r-mid-r").children();
    var index = 0;
    spans.on("click", function () {
        index = $(this).index();
        $(uls[index]).fadeIn(200).siblings().hide();

    })

    spans.on("mouseenter", function () {
        $(this).css({"background":"#e92322"}).siblings().css({"background":"#ccc"});
    })
    spans.on("mouseleave", function () {
        $(spans[index]).css({"background":"#e92322"}).siblings().css({"background":"#ccc"});
    })

});