/**
 * Created by Administrator on 2016/10/6.
 */
    $(function(){
        //轮播图
        var box = document.getElementById("box");
        var screen = box.children[0];
        var ul = screen.children[0];
        var ulLis = ul.children;
        var ol = screen.children[1];
        var arr = document.getElementById("arr");
        var left = document.getElementById("left");
        var right = document.getElementById("right");
        var imgWidth = screen.offsetWidth;
        var timer = null;
        //动态生成结构
        for (var i = 0; i < ulLis.length; i++) {
            var li = document.createElement("li");
            li.innerHTML = i + 1;
            ol.appendChild(li);
        }
        var firstImg = ulLis[0].cloneNode(true);//生成假图片
        ul.appendChild(firstImg);
        //2. 鼠标经过按钮当前按钮高亮  ul移动到相应位置
        //2.1给每个按钮绑定鼠标经过事件 并且按钮排他
        var olLis = ol.children;
        for (var i = 0; i < olLis.length; i++) {
            olLis[i].onmouseover = function () {
                for (var j = 0; j < olLis.length; j++) {
                    olLis[j].index = j;//自定义属性记录每项按钮的索引
                    olLis[j].className = "";
                }
                this.className = "current";
                //2.2ul移动到指定位置
                var target = -this.index * imgWidth;  //target目标位置和按钮索引与图片宽度有关
                animate(ul, target);
            }
        }
        //3.鼠标经过box显示箭头，离开隐藏。
        box.onmouseover = function () {
            arr.style.display = "block";
            clearInterval(timer);
        }
        box.onmouseout = function () {
            arr.style.display = "none";
            timer = setInterval(right.onclick, 2000);
        }
        //4.点击箭头图片移动，代表图片的按钮当前高亮
        //4.1 给右箭头绑定点击事件,点击箭头图片移动
        var pic = 0;//记录当前图片的索引
        var square = 0;//记录当前亮起按钮的索引
        right.onclick = function () {
            if (pic === ulLis.length - 1) {
                ul.style.left = 0 + "px";
                pic = 0;
            }
            pic++;
            var target = -pic * imgWidth;
            animate(ul, target);
            //4.2点击箭头，按钮跟着变换当前高亮
            if (square < olLis.length - 1) {
                square++;
            } else {
                square = 0;
            }
            for (var i = 0; i < olLis.length; i++) {
                olLis[i].className = "";
            }
            olLis[square].className = "current";
        }
        //4.3 给左箭头绑定点击事件,点击箭头图片移动
        left.onclick = function () {
            if (pic === 0) {
                ul.style.left = -(ulLis.length - 1) * imgWidth + "px";
                pic = ulLis.length - 1;
            }
            pic--;
            var target = -pic * imgWidth;
            animate(ul, target);
            //4.4点击箭头，按钮跟着变换当前高亮
            if (square > 0) {
                square--;
            } else {
                square = olLis.length - 1;
            }
            for (var i = 0; i < olLis.length; i++) {
                olLis[i].className = "";
            }
            olLis[square].className = "current";
        }
        //5.添加自动播放
        timer = setInterval(right.onclick, 2000);
        //封装匀速动画
        function animate(obj, target) {
            clearInterval(obj.timer);
            obj.timer = setInterval(function () {
                var leader = obj.offsetLeft;
                var step = 25;
                step = leader < target ? step : -step;
                if (Math.abs(leader - target) >= Math.abs(step)) {
                    leader = leader + step;
                    obj.style.left = leader + "px";
                } else {
                    clearInterval(obj.timer);
                    obj.style.left = target + "px"
                }
            }, 15);
        }

    })
