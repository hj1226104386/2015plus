/**
 * Created by Administrator on 2016/10/4.
 */
$(function () {
    /* 轮播图begin */
    var timeId = null;
    var $topBtns = $("#topBtn").children("li");

    function fn() {
        if ($("#topPic").position().left === 0) {
            $("#topPic").animate({"left": -865}, "slow")
            $topBtns.eq(1).css("backgroundColor", "rgba(0,0,0,0.5)");
            $topBtns.eq(1).siblings().css("backgroundColor", "rgba(255,255,255,0.2)");
        } else {
            $("#topPic").animate({"left": 0}, "slow")
            $topBtns.eq(0).css("backgroundColor", "rgba(0,0,0,0.5)");
            $topBtns.eq(0).siblings().css("backgroundColor", "rgba(255,255,255,0.2)");
        }
    };
    //设置自动播放
    timeId = setInterval(function () {
        fn()
    }, 2500);
    //鼠标移入盒子 停止定时器
    $(".banner_t").on("mouseenter", function () {
        clearInterval(timeId);
    })
    //鼠标离开盒子 继续播放
    $(".banner_t").on("mouseleave", function () {
        timeId = setInterval(function () {
            fn()
        }, 2500)
    })
    //第一个按钮深色，鼠标移入按钮颜色变深其他按钮变淡
    $topBtns.eq(0).css("backgroundColor", "rgba(0,0,0,0.5)");
    $topBtns.on("mouseenter", function () {
        var index = $(this).index()
        $(this).css("backgroundColor", "rgba(0,0,0,0.5)")
        $(this).siblings().css("backgroundColor", "rgba(255,255,255,0.2)")
        $(this).children("a").css("color", "white")
        if (index === 0) {
            $("#topPic").animate({"left": 0}, "normal")
        } else {
            $("#topPic").animate({"left": -865}, "normal")
        }
    });
    /* 轮播图end */
    /* 顶部通栏begin */
    $("#jiantouxia01").on("mouseenter", function () {
        $(".add_one").stop(true, true)
        $(".add_one").slideDown("fast");
    });
    $("#jiantouxia01").on("mouseleave", function () {
        $(".add_one").slideUp("normal");
    });
    $("#jiantouxia02").on("mouseenter", function () {
        $(".add_two").stop(true, true)
        $(".add_two").slideDown("fast");
    });
    $("#jiantouxia02").on("mouseleave", function () {
        $(".add_two").slideUp("normal");
    });
    /* 顶部通栏end */
    /* 广告区begin */
    $(".banner_li").on("mouseenter", function () {
        var index = $(this).index();
        $(this).css("backgroundColor", "#fff");
        $(this).find("a").css("color", "#000");
        $("#banner_add" + index + "").show();

    });
    $(".banner_li").on("mouseleave", function () {
        var index = $(this).index();
        $(this).css("backgroundColor", "#344c5d");
        $(this).find("a").css("color", "#fff")
        $("#banner_add" + index + "").hide();
    });
    /* 广告区end */
    /* 超值爆款begin */
    var $holidayLis = $(".holiday_t").find("li");
    var $changes = $("#holidayChange").children()
    $changes.hide();
    $changes.eq(0).show();
    $holidayLis.on("mouseenter", function () {
        var index = $(this).index();
        $(this).css({"backgroundColor": "#21c09e", "border-radius": "10px"});
        $(this).find("a").css("color", "#000");
        $changes.eq(index).show();
        $changes.eq(index).siblings().hide();
    });
    $holidayLis.on("mouseleave", function () {
        $(this).css("backgroundColor", "#f0f0f0");
        $(this).find("a").css("color", "#fff")
    });
    /* 超值爆款end */
    /* 侧边栏begin */
    $(window).scroll(function () {
        if ($(document).scrollTop() > 200) {
            $(".sidebar").fadeIn("fast")
        }else{
            $(".sidebar").fadeOut("fast")
        }
    })
    $("#UP").on("click", function () {
       $("html,body").animate({"scrollTop":"0"},"slow")
    });
    /* 侧边栏end */
});