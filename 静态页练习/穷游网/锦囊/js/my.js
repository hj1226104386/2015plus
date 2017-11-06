/**
 * Created by Administrator on 2016/10/2.
 */
$(function () { //入口函数
    //导航栏特效
    //var timer = null;
    $(".community").mouseenter(function () {
        $(".s_arr").show(200);
        $(".community_down").show(200);
    })
    $(".community").mouseleave(function () {
        timer = setTimeout(function () {
            $(".s_arr").hide(200);
            $(".community_down").hide(200);
        }, 500)
    })
    $(".community_down").delegate("li", "mouseenter", function () {
        clearTimeout(timer);
        $(".s_arr").show();
        $(".community_down").show();
        $(this).css("background", "#E3FAE1").siblings().css("background", "#fff");
    })
    $(".community_down").mouseleave(function () {
        $(".community_down").children().css("background", "#fff");
        $(".s_arr").hide(200);
        $(".community_down").hide(200);

    })


    $(".reseve").mouseenter(function () {
        $(".reseve_arr").show(200);
        $(".reseve_down").show(200);
    })
    $(".reseve").mouseleave(function () {
        timer = setTimeout(function () {
            $(".reseve_arr").hide(200);
            $(".reseve_down").hide(200);
        }, 500)
    })
    $(".reseve_down").delegate("li", "mouseenter", function () {
        clearTimeout(timer);
        $(".reseve_arr").show();
        $(".reseve_down").show();
        $(this).css("background", "#E3FAE1").siblings().css("background", "#fff");
    })
    $(".reseve_down").mouseleave(function () {
        $(".reseve_down").children().css("background", "#fff");
        $(".reseve_arr").hide(200);
        $(".reseve_down").hide(200);

    })
    //搜索框
    $(".close").click(function () {
        $(".inp_search").val("");
    })


    //左侧导航栏
    var timer = null
    $(".navb_item").mouseenter(function () {
        clearTimeout(timer);
        $(this).css("background", "#EBEBEB").siblings().css("background", "#F6F6F6")
        var index = $(this).index();
        $(".main").eq(index).addClass("selected").siblings().removeClass("selected")
    })

    $(".navb_item").mouseleave(function () {
        timer = setTimeout(function () {
            $(".navb_item").css("background", "#F6F6F6")
            $(".main").removeClass("selected")
        }, 300)

    })
    $(".products").mouseenter(function () {
        clearTimeout(timer);
        var index = $(this).index();
        $(".main").eq(index).addClass("selected")
    })
    $(".products").mouseleave(function () {
        $(".navb_item").css("background", "#F6F6F6")
        $(".main").removeClass("selected")
    })

    //编辑推荐特效
    //var lis = $(".r_content").children();
    //lis.each(function () {
    //    $(this).mouseenter(function () {
    //        $(this).css("opacity", "1").siblings().css("opacity", "0.5");
    //    })
    //})
    //lis.each(function () {
    //    $(this).mouseleave(function () {
    //        $(this).siblings().css("opacity", "1");
    //    })
    //})

    //$(".r_c_item").mouseenter(function(){
    //    var index = $(this).index();
    //    $(".pic img").eq(index).css({
    //        width:110,
    //        height:160
    //    });
    //    $(".download input").eq(index).css({
    //        width:114,
    //    })
    //})
    //$(".r_c_item").mouseleave(function(){
    //    var index = $(this).index();
    //    $(".pic img").eq(index).css({
    //        width:100,
    //        height:150
    //    });
    //    $(".download input").eq(index).css({
    //        width:108,
    //    })
    //})
    //全部锦囊特效
    $(".con_item").mouseenter(function () {
        var index = $(this).index();
        $(".pic_mask").eq(index).stop(true, false);
        $(".pic_mask").eq(index).slideDown(300);

    })
    $(".con_item").mouseleave(function () {
        var index = $(this).index();
        $(".pic_mask").eq(index).slideUp(300)
    })


})

