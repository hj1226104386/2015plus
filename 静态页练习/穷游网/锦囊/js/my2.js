/**
 * Created by Administrator on 2016/10/6.
 */
    $(function(){
        //�ֲ�ͼ
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
        //��̬���ɽṹ
        for (var i = 0; i < ulLis.length; i++) {
            var li = document.createElement("li");
            li.innerHTML = i + 1;
            ol.appendChild(li);
        }
        var firstImg = ulLis[0].cloneNode(true);//���ɼ�ͼƬ
        ul.appendChild(firstImg);
        //2. ��꾭����ť��ǰ��ť����  ul�ƶ�����Ӧλ��
        //2.1��ÿ����ť����꾭���¼� ���Ұ�ť����
        var olLis = ol.children;
        for (var i = 0; i < olLis.length; i++) {
            olLis[i].onmouseover = function () {
                for (var j = 0; j < olLis.length; j++) {
                    olLis[j].index = j;//�Զ������Լ�¼ÿ�ť������
                    olLis[j].className = "";
                }
                this.className = "current";
                //2.2ul�ƶ���ָ��λ��
                var target = -this.index * imgWidth;  //targetĿ��λ�úͰ�ť������ͼƬ����й�
                animate(ul, target);
            }
        }
        //3.��꾭��box��ʾ��ͷ���뿪���ء�
        box.onmouseover = function () {
            arr.style.display = "block";
            clearInterval(timer);
        }
        box.onmouseout = function () {
            arr.style.display = "none";
            timer = setInterval(right.onclick, 2000);
        }
        //4.�����ͷͼƬ�ƶ�������ͼƬ�İ�ť��ǰ����
        //4.1 ���Ҽ�ͷ�󶨵���¼�,�����ͷͼƬ�ƶ�
        var pic = 0;//��¼��ǰͼƬ������
        var square = 0;//��¼��ǰ����ť������
        right.onclick = function () {
            if (pic === ulLis.length - 1) {
                ul.style.left = 0 + "px";
                pic = 0;
            }
            pic++;
            var target = -pic * imgWidth;
            animate(ul, target);
            //4.2�����ͷ����ť���ű任��ǰ����
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
        //4.3 �����ͷ�󶨵���¼�,�����ͷͼƬ�ƶ�
        left.onclick = function () {
            if (pic === 0) {
                ul.style.left = -(ulLis.length - 1) * imgWidth + "px";
                pic = ulLis.length - 1;
            }
            pic--;
            var target = -pic * imgWidth;
            animate(ul, target);
            //4.4�����ͷ����ť���ű任��ǰ����
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
        //5.����Զ�����
        timer = setInterval(right.onclick, 2000);
        //��װ���ٶ���
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
