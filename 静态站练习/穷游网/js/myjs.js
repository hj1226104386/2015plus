/**
 * Created by Administrator on 2016/10/2.
 */

/**
 * ͷ����������
 */
$(function () {
    //������ע�����¼�
    $("#community").on("click mouseenter", function () {
        $(".community-div").slideDown();
    });
    $(document).on("click", function () {
        $(".community-div").slideUp();
    });
    //�����������б�ע����������¼�  �������
    var bgc2 = $(".community-div>ul>li").css("backgroundColor");
    $(".community-div>ul>li").on("mouseenter",function(){
        $(this).css("backgroundColor","#29CD7C").siblings().css("backgroundColor",bgc2);
    });
    $(".community-div").on("mouseleave", function () {
       $(this).slideUp();
    });
    //��Ԥ��ע����꾭���¼�
    $("#book").on("click mouseenter", function () {
        $(".book-div").slideDown();
    });
    $(document).on("click", function () {
        $(".book-div").slideUp();
    });
    // �������
    var bgc1 = $(".book-div>ul>li").css("backgroundColor");
    $(".book-div>ul>li").on("mouseenter",function(){
        $(this).css("backgroundColor","#29CD7C").siblings().css("backgroundColor",bgc1);
    });
    $(".book-div").on("mouseleave", function () {
        $(this).slideUp();
    });

    //��ͷ��С������󶨵���¼�
    $(".suosou").on("click mouseenter", function () {
        $("#ss").animate({"width":"200px"});
    });
    $("#ss").on("blur", function () {
        $("#ss").animate({"width":0});
    });


    //ͷ���ֲ�ͼ�ļ�ͷ����ʾ������
    $("#head").on({
        mouseenter:function(){
            $("#arr").fadeIn(300);
        },
        mouseleave:function(){
            $("#arr").fadeOut(300);
        }
    })





    /**
     * //�������Ȥ���ֵ���Ч
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
            });//�˶���Ч����bug;ע���޸�
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
     * ����ע��ģ̬�򲿷�
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

    //����ģ̬��  ������Ͻǹر�ģ̬��
    $(".sc").on("click", function () {
        $("#frame").fadeOut(500);
    })

    //����ֻ�ע�� �л�ע��tab��
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
     * //���������������水ť�������Ч��
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
     * //�����μ��뻰�����水ť�������Ч��
     */
    $(".ht-checkmore").on({
        mouseenter:function(){
            $(this).css("boxShadow","0 0 4px 2px gray");
        },
        mouseleave:function(){
            $(this).css("boxShadow","none");
        }
    });


    //�������ζ�������������ӰЧ��
   $(".findqy-b-left").find("li").on({
       mouseenter:function(){
           $(this).css("boxShadow","0 0 4px 2px #ccc");
       },
       mouseleave:function(){
           $(this).css("boxShadow","none");
       }
   });






     //�����μ��뻰������ͼƬ�����������Ŵ�Ч��

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



    //��ÿ��liע����������¼�
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

//����ҳ�淵��ҳ�涥����ť�Զ�����Ч��
    $(window).on("scroll",function(){
        if(scroll().top>500){
            $(".backtop").fadeIn(300);
        }else {
            $(".backtop").fadeOut(300);
        }
    })


    //�����ť,ҳ�滺��������ҳ�涥��
    $(".backtop").on("click",function(){
        $('html,body').animate({scrollTop:'0px'},600);
    })


});










/**
 * ͷ���ֲ�ͼ����
 */
window.onload = function () {
    //���һ���������ֲ�ͼ
//ע����������¼�
//Ҫ����  ������
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
//���ݵ�һ��ͼƬ��¡һ�ŷŵ����  ���޷����;
    var firstImg = ulLis[0].cloneNode("li");
    ul.appendChild(firstImg);
    //ע����������¼�

    //�����Ҽ�ͷע�����¼�
    var pic = 0;//��¼��ǰ��ͼƬ����
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

    //���ö�ʱ��  ͼƬ�Զ�����
    screen.timer = setInterval(arrright.onclick, 3000);
    head.onmouseover = function () {
        clearInterval(screen.timer);
    }
    head.onmouseout = function () {
        screen.timer = setInterval(arrright.onclick, 3000);
    };



 //�����������в��ֵ��޷����Ч��
    //��̬����һ��li�ŵ����  ���޷������Ч��
    //Ҫ����  ������
    var timer = null;
    var timer1 = null;
    var zyw_tp = document.getElementById("zyw_tp");
    var zyw_bm = document.getElementById("zyw_bm");
    var zyw_tp_ul = zyw_tp.children[0];
    var zyw_bm_ul = zyw_bm.children[0];
    var zyw_tp_ulLis = zyw_tp_ul.children;
    var zyw_bm_ulLis = zyw_bm_ul.children;
    //���ݵ�һ����̬����׷�ӵ����
    var firstTopLis=zyw_tp_ulLis[0].cloneNode(true);
    zyw_tp_ul.appendChild(firstTopLis);
    var firstBottomLis=zyw_bm_ulLis[0].cloneNode(true);
    zyw_bm_ul.appendChild(firstBottomLis);
    //������һ��ul���ö�ʱ��
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
    //��꾭�������ʱ��
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
     * �����μ��뻰�ⲿ���ֲ�ͼ
     * @param obj
     * @param target
     */
    //��һ���������ֲ�ͼ ,�������İ�ťͼƬ�ܸ����л� ͬʱ��ǰ��ť����ɫ��Ϊ��ɫ; ���Զ�����
    //Ҫ���� ������
    var ht_c_ul = document.getElementById("ht_c_ul");
    var ht_c_ulLis = ht_c_ul.children;
    var ht_screen = document.getElementById("ht_screen");
    var ht_picWidth = ht_screen.offsetWidth;
    var ht_button = document.getElementsByClassName("ht-button");
    var ht_b_ul = document.getElementById("ht_b_ul")
    var ht_b_ulLis = ht_b_ul.children;

    //������ť,ע����꾭���¼�,��꾭����ť����,������ťϨ��
    for(var i = 0;i<ht_b_ulLis.length;i++){
        ht_b_ulLis[i].index = i;//�Զ���һ������,������¼��ǰ�İ�ť����
        ht_b_ulLis[0].style.backgroundColor = "#1AB05F";
        ht_b_ulLis[i].onmouseover = function(){
            //�ɵ����а�ť
            for(var j =0;j<ht_b_ulLis.length;j++){
                ht_b_ulLis[j].style.backgroundColor = "#D7D7D7";
            }
            //�������Լ�
            this.style.backgroundColor = "#1AB05F";
            //���С��ť  ͼƬ�ܸ����л�
            var target = -this.index*ht_picWidth;
            buffAnimate(ht_c_ul,target);
        }
    }


    /**
     * ��������er���ִ�ֱ�޷����
     * @param obj
     * @param target
     */
    //��ɴ�ֱ�����޷����Ч��
    //Ҫ����  ������
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

    //�������������ʱ��;
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











//��װ������������
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


//ģ̬�����֤
    function test(obj,regE){
        obj.onblur = function () {
            if(regE.test(this.value)){
                this.parentNode.nextElementSibling.innerHTML = "������ȷŶ!";
                this.parentNode.nextElementSibling.className = "right";
            }else {
                this.parentNode.nextElementSibling.innerHTML = "���벻����Ҫ��Ŷ!";
                this.parentNode.nextElementSibling.className = "wrong";
            }
        }
    }




};















