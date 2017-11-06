/**
 * Created by Administrator on 2016/10/2.
 */

/**
 * 头部弹出部分
 */
$(function () {
    //给社区注册点击事件
    $("#community").on("click mouseenter", function () {
        $(".community-div").slideDown();
    });
    $(document).on("click", function () {
        $(".community-div").slideUp();
    });
    //给社区下拉列表注册鼠标移入事件  移入高亮
    var bgc2 = $(".community-div>ul>li").css("backgroundColor");
    $(".community-div>ul>li").on("mouseenter",function(){
        $(this).css("backgroundColor","#29CD7C").siblings().css("backgroundColor",bgc2);
    });
    $(".community-div").on("mouseleave", function () {
       $(this).slideUp();
    });
    //给预定注册鼠标经过事件
    $("#book").on("click mouseenter", function () {
        $(".book-div").slideDown();
    });
    $(document).on("click", function () {
        $(".book-div").slideUp();
    });
    // 移入高亮
    var bgc1 = $(".book-div>ul>li").css("backgroundColor");
    $(".book-div>ul>li").on("mouseenter",function(){
        $(this).css("backgroundColor","#29CD7C").siblings().css("backgroundColor",bgc1);
    });
    $(".book-div").on("mouseleave", function () {
        $(this).slideUp();
    });

    //给头部小搜索框绑定点击事件
    $(".suosou").on("click mouseenter", function () {
        $("#ss").animate({"width":"200px"});
    });
    $("#ss").on("blur", function () {
        $("#ss").animate({"width":0});
    });


    //头部轮播图的箭头的显示与隐藏
    $("#head").on({
        mouseenter:function(){
            $("#arr").fadeIn(300);
        },
        mouseleave:function(){
            $("#arr").fadeOut(300);
        }
    })





    /**
     * //猜你感兴趣部分的特效
     * @param obj
     * @param target
     */
    $("#i-b>ul>li").on({
        mouseenter: function () {
            $(this).find(".i-b-mask").animate({"width":275,"height":185}, function () {
                $(this).prev().animate({"width":0,"height":0},function(){
                    $(this).css("display","none");
                    $(this).parent().next().find(".support").show(300);
                    $(this).prev().css("opacity",0.9);
                })
            });//此动画效果有bug;注意修复
            //$("#support").slideDown();
    },

        mouseleave: function () {
            $(this).stop(true,true);
            $(this).find(".i-b-mask").animate({"width":0,"height":0}, function () {
                $(this).prev().animate({"width":60,"height":60},function(){
                    $(this).css("display","block");
                    $(this).parent().next().find(".support").hide(200);
                    $(this).prev().css("opacity",1);
                })
            });


        }
    });


    /**
     * 立即注册模态框部分
     */
    var bgc = $(".nowlogin").css("backgroundColor");
$(".nowlogin").on({
    mouseenter: function () {
        $(this).css("backgroundColor","#3F9F5F");
    },
    mouseleave: function () {
        $(this).css("backgroundColor",bgc);
    },
    click: function () {
        $("#frame").fadeIn(500);
    }

})

    //进入模态框  点击右上角关闭模态框
    $(".sc").on("click", function () {
        $("#frame").fadeOut(500);
    })

    //点击手机注册 切换注册tab栏
    $(".rs3").on("click",function(){
        $(this).css({
            "borderColor":"#10B041",
            color:"#10B041"
        })
        $(".ry3").css({
            "borderColor":"#fff",
            color:"#959595"
        })
        $(".hideA").hide();
        $(".hideB").show();
    })
    $(".ry3").on("click", function () {
        $(this).css({
            "borderColor":"#10B041",
            color:"#10B041"
        })
        $(".rs3").css({
            "borderColor":"#fff",
            color:"#959595"
        })
        $(".hideB").hide();
        $(".hideA").show();
    })


    /**
     * //最世界自由行下面按钮鼠标移入效果
     */
    $(".checkmore").on({
        mouseenter:function(){
            $(this).css("boxShadow","0 0 4px 2px gray");
        },
        mouseleave:function(){
            $(this).css("boxShadow","none");
        }
    });

    /**
     * //热门游记与话题下面按钮鼠标移入效果
     */
    $(".ht-checkmore").on({
        mouseenter:function(){
            $(this).css("boxShadow","0 0 4px 2px gray");
        },
        mouseleave:function(){
            $(this).css("boxShadow","none");
        }
    });


    //发现穷游儿鼠标移入出现阴影效果
   $(".findqy-b-left").find("li").on({
       mouseenter:function(){
           $(this).css("boxShadow","0 0 4px 2px #ccc");
       },
       mouseleave:function(){
           $(this).css("boxShadow","none");
       }
   });






     //热门游记与话题所有图片内容鼠标移入放大效果

    $("#ht_c_ul").find(".ht_li").on({
        mouseenter:function(){
            $(this).css("boxShadow","2px 2px 7px 3px gray");
            $(this).find("img:eq(0)").css({
                "transform":"scale(1.15)",
                "transition":"all 2s ease"
            });

        },
        mouseleave:function(){
            $(this).css("boxShadow","none");
            $(this).find("img:eq(0)").css("transform","scale(1)");
        }
    })



    //给每个li注册鼠标移入事件
    $("#zyw_tp").children("ul").children().on({
        mouseenter:function(){
            $(this).css("boxShadow","0 0 4px 2px gray");
        },
        mouseleave:function(){
            $(this).css("boxShadow","none");
        }
    });

    $("#zyw_bm").children("ul").children().on({
        mouseenter:function(){
            $(this).css("boxShadow","0 0 4px 2px gray");
        },
        mouseleave:function(){
            $(this).css("boxShadow","none");
        }
    });

//滚动页面返回页面顶部按钮自动弹出效果
    $(window).on("scroll",function(){
        if(scroll().top>500){
            $(".backtop").fadeIn(300);
        }else {
            $(".backtop").fadeOut(300);
        }
    })


    //点击按钮,页面缓慢滑动到页面顶部
    $(".backtop").on("click",function(){
        $('html,body').animate({scrollTop:'0px'},600);
    })


});










/**
 * 头部轮播图部分
 */
window.onload = function () {
    //完成一个完整的轮播图
//注册鼠标移入事件
//要做事  先找人
    function $(id) {
        return document.getElementById(id)
    };
    var screen = $("screen");
    var ul = screen.children[0];
    var ulLis = ul.children;
    var arr = $("arr");
    var arrleft = $("arrleft");
    var arrright = $("arrright");
    var picWidth = screen.offsetWidth;
    var timer = null;
//根据第一张图片克隆一张放到最后  做无缝滚动;
    var firstImg = ulLis[0].cloneNode("li");
    ul.appendChild(firstImg);
    //注册鼠标移入事件

    //给左右箭头注册点击事件
    var pic = 0;//记录当前的图片索引
    arrright.onclick = function () {
        if (pic === ulLis.length - 1) {
            pic = 0;
            ul.style.left = 0;
        }
        pic++;
        var target = -pic * picWidth;
        buffAnimate(ul, target);
    };
    arrleft.onclick = function () {
        if (pic === 0) {
            pic = ulLis.length - 1;
            ul.style.left = -pic * picWidth + "px";
        }
        pic--;
        buffAnimate(ul, -pic * picWidth);
    };

    //设置定时器  图片自动滚动
    screen.timer = setInterval(arrright.onclick, 3000);
    head.onmouseover = function () {
        clearInterval(screen.timer);
    }
    head.onmouseout = function () {
        screen.timer = setInterval(arrright.onclick, 3000);
    };



 //最世界自由行部分的无缝滚动效果
    //动态生成一个li放到最后  做无缝滚动的效果
    //要做事  先找人
    var timer = null;
    var timer1 = null;
    var zyw_tp = document.getElementById("zyw_tp");
    var zyw_bm = document.getElementById("zyw_bm");
    var zyw_tp_ul = zyw_tp.children[0];
    var zyw_bm_ul = zyw_bm.children[0];
    var zyw_tp_ulLis = zyw_tp_ul.children;
    var zyw_bm_ulLis = zyw_bm_ul.children;
    //根据第一个动态生成追加到最后
    var firstTopLis=zyw_tp_ulLis[0].cloneNode(true);
    zyw_tp_ul.appendChild(firstTopLis);
    var firstBottomLis=zyw_bm_ulLis[0].cloneNode(true);
    zyw_bm_ul.appendChild(firstBottomLis);
    //给上面一个ul设置定时器
    timer=setInterval(function () {
        var leader = zyw_tp_ul.offsetLeft;
        var step = -1;
        if(leader>-2100){
            leader = leader + step;
            zyw_tp_ul.style.left = leader + "px";
        }else {
            zyw_tp_ul.style.left = 0 + "px";
        }
    },15)
    timer1=setInterval(function () {
        var leader = zyw_bm_ul.offsetLeft;
        var step = -1;
        if(leader>-2100){
            leader = leader + step;
            zyw_bm_ul.style.left = leader + "px";
        }else {
            zyw_bm_ul.style.left = 0 + "px";
        }
    },15)
    //鼠标经过清除定时器
    zyw_tp.onmouseover = function(){
        clearInterval(timer);
    }
    zyw_tp.onmouseout = function(){
        timer=setInterval(function () {
            var leader = zyw_tp_ul.offsetLeft;
            var step = -1;
            if(leader>-2100){
                leader = leader + step;
                zyw_tp_ul.style.left = leader + "px";
            }else {
                zyw_tp_ul.style.left = 0 + "px";
            }
        },15)
    }
    zyw_bm.onmouseover = function(){
        clearInterval(timer1);
    }
    zyw_bm.onmouseout = function(){
        timer1=setInterval(function () {
            var leader = zyw_bm_ul.offsetLeft;
            var step = -1;
            if(leader>-2100){
                leader = leader + step;
                zyw_bm_ul.style.left = leader + "px";
            }else {
                zyw_bm_ul.style.left = 0 + "px";
            }
        },15)
    }


    /**
     * 热门游记与话题部分轮播图
     * @param obj
     * @param target
     */
    //做一个完整的轮播图 ,点击下面的按钮图片能跟着切换 同时当前按钮背景色变为绿色; 能自动滚动
    //要做事 先找人
    var ht_c_ul = document.getElementById("ht_c_ul");
    var ht_c_ulLis = ht_c_ul.children;
    var ht_screen = document.getElementById("ht_screen");
    var ht_picWidth = ht_screen.offsetWidth;
    var ht_button = document.getElementsByClassName("ht-button");
    var ht_b_ul = document.getElementById("ht_b_ul")
    var ht_b_ulLis = ht_b_ul.children;

    //遍历按钮,注册鼠标经过事件,鼠标经过按钮高亮,其他按钮熄灭
    for(var i = 0;i<ht_b_ulLis.length;i++){
        ht_b_ulLis[i].index = i;//自定义一个属性,用来记录当前的按钮索引
        ht_b_ulLis[0].style.backgroundColor = "#1AB05F";
        ht_b_ulLis[i].onmouseover = function(){
            //干掉所有按钮
            for(var j =0;j<ht_b_ulLis.length;j++){
                ht_b_ulLis[j].style.backgroundColor = "#D7D7D7";
            }
            //留下我自己
            this.style.backgroundColor = "#1AB05F";
            //点击小按钮  图片能跟着切换
            var target = -this.index*ht_picWidth;
            buffAnimate(ht_c_ul,target);
        }
    }


    /**
     * 发现穷游er部分垂直无缝滚动
     * @param obj
     * @param target
     */
    //完成垂直方向无缝滚动效果
    //要做事  先找人
        var timer3 = null;
    var f_b_r_ul = document.getElementsByClassName("findqy_b_r_ul")[0];
    var f_b_right = document.getElementsByClassName("findqy-b-right")[0];
    timer3=setInterval(function(){
        var leader = f_b_r_ul.offsetTop;
        var step = -1;
        if(leader>-720){
            leader =leader + step;
            f_b_r_ul.style.top = leader + "px";
        }else {
            f_b_r_ul.style.top = 0 +"px";
        }
    },15)

    //鼠标移入就清除定时器;
    f_b_right.onmouseover = function(){
        clearInterval(timer3);
    }
    f_b_right.onmouseout = function(){
        clearInterval(timer3);
        timer3=setInterval(function(){
            var leader = f_b_r_ul.offsetTop;
            var step = -1;
            if(leader>-720){
                leader =leader + step;
                f_b_r_ul.style.top = leader + "px";
            }else {
                f_b_r_ul.style.top = 0 +"px";
            }
        },15)
    }











//封装缓动动画函数
    function buffAnimate(obj,target){
        clearInterval(obj.timer);
        obj.timer=setInterval(function () {
            var leader = obj.offsetLeft;
            var step = (target-leader)/10;
            step= step>0?Math.ceil(step):Math.floor(step);
            leader = leader  + step;
            obj.style.left = leader + "px";
            if(step===0){
                clearInterval(obj.timer);
            }
        },15)
    }


//模态框表单验证
    function test(obj,regE){
        obj.onblur = function () {
            if(regE.test(this.value)){
                this.parentNode.nextElementSibling.innerHTML = "输入正确哦!";
                this.parentNode.nextElementSibling.className = "right";
            }else {
                this.parentNode.nextElementSibling.innerHTML = "输入不符合要求哦!";
                this.parentNode.nextElementSibling.className = "wrong";
            }
        }
    }




};















