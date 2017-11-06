/**
 * Created by hasee on 2016/10/4.
 */
$(function () {
        var timer = null;
        var flag = true;
        //topnav
        $("#commu").mouseenter(function () {
            $(this).children(".xiasanjiao").show();
            $("#idCommunity").show();
        });
        $("#commu").mouseleave(function () {
            $(this).children(".xiasanjiao").hide();
            $("#idCommunity").hide();
        });
        $("#idCommunA").mouseenter(function () {
            $(this).children(".tourforum").show();
        });
        $("#idCommunA").mouseleave(function () {
            $(this).children(".tourforum").hide();
        });
        $("#reserve").mouseenter(function () {
            $(this).children(".xiasanjiao,.reserveBox").show()
        });
        $("#reserve").mouseleave(function () {
            $(this).children(".xiasanjiao,.reserveBox").hide();
        });
        $("#idTRfristli").mouseenter(function () {
            $("#idTRfristli").children("input").stop(true, false);
            $(this).children("input").show();
            $(this).children("input").animate({
                "width": 260,
                "left": -235,
                "padding-left": 5
            }, 600);
        });
        $("#idTRfristli").mouseleave(function () {
            $("#idTRfristli").children("input").stop(true, false);
            if ($("#idTRfristli").children("input").val() === "") {
                $(this).children("input").animate({
                    "width": 0,
                    "left": 25,
                    "padding-left": 0
                }, 600, function () {
                    $("#idTRfristli").children("input").hide();
                });
            }
        });
        //main
        //轮播图
        //大图随小标移动
        //var wleft = $(document).width();
        //$("#carouselUl").children("li").css("width", wleft);
        $("#idLittlenav").children().mouseenter(function () {
            $("#carouselUl").stop(true, false)
            //排他
            $(this).addClass("chick").siblings().removeClass("chick");
            //绑定图片
            var index = $(this).index()
            var target = -index * $("#carouselUl").children().width();
            $("#carouselUl").animate({"left": target}, 800);
            q = w = index;
        });
        //点击箭头
        //右
        var q = 0;//1.2.3.1.2
        var w = 0;//1.2.0.0.1
        $("#idArrowsright").click(wer = function () {
            if (flag === false) {
                return;
            }
            flag = false;
            if (q === $("#carouselUl").children().length - 1) {
                q = 0;
                $("#carouselUl").css("left", 0);
            }
            if (w < $("#carouselUl").children().length - 2) {
                w++;
            } else {
                w = 0;
            }
            q++;
            var target = -q * $("#carouselUl").children().width();
            $("#carouselUl").animate({"left": target}, 800, function () {
                flag = true;
            });
            $($("#idLittlenav").children()[w]).addClass("chick").siblings().removeClass("chick");
        });
        //左
        $("#idArrowsleft").click(function () {
            if (flag === false) {
                return;
            }
            flag = false;
            if (q === 0) {
                q = ($("#carouselUl").children().length - 1);
                var leftm = -q * $("#carouselUl").children().width() + "px";
                $("#carouselUl").css("left", leftm);
            }
            if (w > 0) {
                w--;
            } else {
                w = $("#carouselUl").children().length - 2;
            }
            q--;
            var target = -q * $("#carouselUl").children().width();
            $("#carouselUl").animate({"left": target}, 800, function () {
                flag = true;
            });
            $($("#idLittlenav").children()[w]).addClass("chick").siblings().removeClass("chick");
        });
        //自动播放
        timer = setInterval(function () {
            $("#idArrowsright").click();
        }, 2000);
        $("#bigBBox").mouseenter(function () {
            clearInterval(timer);
        })
        $("#bigBBox").mouseleave(function () {
            timer = setInterval(function () {
                $("#idArrowsright").click();
            }, 2000);
        })
        //主导航
        $(".imformUlli1").mouseenter(function () {
            $("#imUlliBox1").show();
        });
        $(".imformUlli1").mouseleave(function () {
            $("#imUlliBox1").hide();
        });
        $(".imformUlli2").mouseenter(function () {
            $("#imUlliBox2").show();
        });
        $(".imformUlli2").mouseleave(function () {
            $("#imUlliBox2").hide();
        });
        $("#idImformSearch").children("input").focus(function () {
            if ($("#idImformSearch").children("input").val() === "搜索国家/地区") {
                $(this).val("");
            }
        })
        $("#idImformSearch").children("input").blur(function () {
            if ($("#idImformSearch").children("input").val() === "") {
                $(this).val("请输入国家/地区");
            }
        })
//nImages
        $("#idNImages").on("mouseenter", ".nBox", function () {
            $(this).find(".tophei,span").show();
            $(this).css("box-shadow", "5px 0 5px 0 rgba(0,0,0,0.3)");
        })
        $("#idNImages").on("mouseleave", ".nBox", function () {
            $(this).find(".tophei,span").hide();
            $(this).css("box-shadow", "");
        })
        var nImage = [
            {"id": "nBox1", "imgsrc": "imgs/339x226.jpg", "name": "泰国", "money": "￥199"},
            {"id": "nBox2", "imgsrc": "imgs/300x200-242.jpg", "name": "加拿大", "money": "￥899"},
            {"id": "nBox3", "imgsrc": "imgs/300x200-259.jpg", "name": "澳大利亚", "money": "￥699"},
            {"id": "nBox4", "imgsrc": "imgs/300x200-194.jpg", "name": "英国", "money": "￥799"},
            {"id": "nBox5", "imgsrc": "imgs/300x200-5.jpg", "name": "日本", "money": "￥99"},
            {"id": "nBox6", "imgsrc": "imgs/300x200-76.jpg", "name": "台湾", "money": "￥159"},
            {"id": "nBox7", "imgsrc": "imgs/300x200-46.jpg", "name": "新加坡", "money": "￥208"},
            {"id": "nBox8", "imgsrc": "imgs/300x200-61.jpg", "name": "韩国", "money": "￥248"}
        ]
        for (var i = 0; i < nImage.length; i++) {
            var str = '<div class="nBox" id="' + nImage[i].id + '">'
                + '<a href="#">'
                + '<img src="' + nImage[i].imgsrc + '" alt=""/>'
                + '<div class="tophei">'
                + '</div>'
                + '<span>立即抢购 &gt;</span>'
                + '<div class="nBotton">'
                + '<s>' + nImage[i].name + '</s>'
                + '<em><i>' + nImage[i].money + '</i>起</em>'
                + '</div>'
                + '</a>'
                + '</div>';
            $("#idNImages").append(str);
        }
        var flagArr = [
            {"id": "idIcon1", "imgsrc": "imgs/France.png", "name": "法国"},
            {"id": "idIcon2", "imgsrc": "imgs/Vietnam.png", "name": "越南"},
            {"id": "nBox3", "imgsrc": "imgs/Turkey.png", "name": "土耳其"},
            {"id": "nBox4", "imgsrc": "imgs/Malaysia.png", "name": "马来西亚"},
            {"id": "nBox5", "imgsrc": "imgs/Canada.png", "name": "加拿大"},
            {"id": "nBox6", "imgsrc": "imgs/Germany.png", "name": "德国"},
            {"id": "nBox7", "imgsrc": "imgs/Switzerland.png", "name": "瑞士"},
            {"id": "nBox8", "imgsrc": "imgs/Italy.png", "name": "意大利"},
            {"id": "nBox9", "imgsrc": "imgs/Greece.png", "name": "希腊"},
            {"id": "nBox10", "imgsrc": "imgs/Spain.png", "name": "西班牙"},
            {"id": "nBox11", "imgsrc": "imgs/SriLanka.png", "name": "斯里兰卡"},
            {"id": "nBox12", "imgsrc": "imgs/NewZealand.png", "name": "新西兰"},
        ];
        for (var i = 0; i < flagArr.length; i++) {
            var str2 = '<div class="icon">'
                + '<a href="#">'
                + '<img src="' + flagArr[i].imgsrc + '" alt=""/>'
                + '<div class="name">' + flagArr[i].name + '</div>'
                + '</a>'
                + '</div>'
            $("#idFlag").append(str2);
        }
        $(".icon").mouseenter(function () {
            //$(".icon .name").css({
            $(this).find(".name").css({
                "text-decoration": "underline",
                "color": "#10B03A"
            });
        });
        $(".icon").mouseleave(function () {
            //$(".icon .name").css({
            $(this).find(".name").css({
                "text-decoration": "none",
                "color": "#323232"
            });
        });
        //手风琴
        var box = document.getElementById("idABOx");
        var lis = box.getElementsByTagName("li");
        //主线：添加图片，设置定位left，放上移动
        //添加图片
        for (var i = 0; i < lis.length; i++) {
            lis[i].index = i;
            //lis[i].style.backgroundImage = "url(images/" + (i + 1) + ".jpg)";
            //设置定位left
            lis[i].style.left = (i * 116) + "px";
            //lis[i].style.left = (i * 20) + "%";
            lis[i].onmouseover = function () {
                for (var j = 0; j < lis.length; j++) {
                    var li = lis[j];
                    if (li.index <= this.index) {
                        animates(li, {"left": j * 60});
                    }
                    else {
                        animates(li, {"left": j * 60 + 522});
                    }
                }
            }
            lis[i].onmouseout = function () {
                for (var i = 0; i < lis.length; i++) {
                    animates(lis[i], {"left": (i * 116)})
                }
            }
        }
//down
        $("#downclose").click(function () {
            $(".down").animate({"opacity": 0}, 800, function () {
                $(".down").hide();
            })
        })
    }
)
;

function animates(obj, json, fn) {//json{k：json[k]  ...}
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;
        for (var k in json) {
            if (k === "opacity") {
                var leader = getStyle(obj, k) * 100;
                var target = json[k] * 100;
                step = (target - leader ) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader / 100;
            } else if (k === "zIndex") {
                obj.style[k] = json[k];
            } else {
                var leader = parseInt(getStyle(obj, k)) || 0;
                var target = json[k];
                var step = (target - leader ) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader + "px";
            }
            if (leader !== target) {//验证是否完成移动
                flag = false;
            }
        }
        if (flag) {//完成清除定时器
            clearInterval(obj.timer);
            if (fn) {
                fn();
            }
        }
    }, 15)
};
function getStyle(obj, attr) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(obj, null)[attr];
    } else {
        return obj.currentStyle[attr];
    }
}