/**
 * 封装缓动框架
 * @param obj
 * @param json
 * @param fn
 */
function buffAnimate(obj,json,fn){
    clearInterval(obj.timer);
    obj.timer= setInterval(function () {
        var flag = true;
        for(var k in json){//k为属性名  json[k]为属性值
            if(k==="opacity"){
                var leader = getStyle(obj,k)*100;//getstyle获取到的是带单位的属性值,不能直接计算,要转换;
                var target = json[k]*100;
                var step = (target-leader)/10;
                step = step>0?Math.ceil(step):Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader/100;
            }
            if(k==="zIndex"){
                obj.style.zIndex = json[k];
            }
            var leader = parseInt(getStyle(obj,k))||0;//getstyle获取到的是带单位的属性值,不能直接计算,要转换;
            var target = json[k];
            var step = (target-leader)/10;
            step = step>0?Math.ceil(step):Math.floor(step);
            leader = leader + step;
            obj.style[k] = leader + "px";
            if(target !==leader){
                flag =false;
            }
        }
        if(flag){
            clearInterval(obj.timer)
            if(fn){
                fn();
            }
        }
        console.log("都到达目标值了吗?");
    },15)
}

//封装获取计算后的样式属性的兼容方法;
function getStyle(obj,attr){
    if(window.getComputedStyle){
        return window.getComputedStyle(obj,null)[attr];
    }else {
        return obj.currentStyle[attr];
    }
}

/**
 * scroll()方法的封装//可以获取页面滚动坐标的兼容方法;
 * @returns {{top: number, left: number}}
 */
function scroll() {

    return {
        top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
    };
}



/**
 * 封装缓动动画的方法,让任意对象往任意位置移动;
 * @param obj
 * @param target
 */
function buffAnimate(obj, target) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        //leader = leader + step
        var leader = obj.offsetLeft;
        var step = (target - leader) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        leader = leader + step;
        obj.style.left = leader + "px";
        if (step === 0) {
            clearInterval(obj.timer);
        }
    }, 15);
}

/**
 * 封装匀速动画原理的方法;
 * @param obj
 * @param target
 */
function animate(obj, target) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        //leader = leader + step;
        var leader = obj.offsetLeft;
        var step = 10;
        step = leader > target ? -step : step;
        if (Math.abs(leader - target) >= Math.abs(step)) {
            leader = leader + step;
            obj.style.left = leader + "px";
        } else {
            obj.style.left = target + "px";
        }
    }, 15)
}


/**
 * 封装innerText浏览器兼容问题的方法
 * @param element
 * @param content
 * @returns {*}
 */
function getInnerText(element, content) {
    if (typeof element.innerText === "string") {
        element.innerText = content;
        return element.innerText;
    } else {
        element.textContent = content;
    }
}


/**
 * 封装获取下一个兄弟元素的兼容方法
 * @param element
 * @returns {*}
 */
function getNextElementSibling(element) {
    if (element.nextElementSibling) {
        return element.nextElementSibling;
    } else {
        var next = element.nextSibling;
        while (next && 1 !== next.nodeType) {
            next = next.nextSibling;
        }
        return next;
    }
}


/**
 * 封装获取上一个兄弟元素的兼容方法;
 * @param element
 * @returns {*}
 */
function getPreviousElementSibling(element) {
    if (element.previousElementSibling) {
        return element.previousElementSibling;
    } else {
        var previous = element.previousSibling;
        while (previous && 1 !== previous.nodeType) {
            previous = previous.previousSibling;
        }
        return previous;
    }
}

/**
 * 封装浏览器兼容firstElementChild问题方法;
 * @param element
 * @returns {*}
 */
function getFirstElementChild(element) {
    if (element.firstElementChild) {
        return element.firstElementChild;
    } else {
        //所有的浏览器都支持firstChild第一个子节点;
        var node = element.firstChild;
        while (node && 1 !== node.nodeType) {
            //找到了但不是我想要的
            node = node.nextSibling;
        }
        return node;
    }
}


/**
 * 封装浏览器兼容lastElementChild问题方法;
 * @param element
 * @returns {*}
 */
function getLastElementChild(element) {
    if (element.lastElementChild) {
        return element.lastElementChild;
    } else {
        //所有的浏览器都支持lastChild第一个子节点;
        var node = element.lastChild;
        while (node && 1 !== node.nodeType) {
            //找到了但不是我想要的
            node = node.previousSibling;
        }
        return node;
    }
}


/**
 * 替换类名方法封装;
 * @param element
 * @param oldName
 * @param newName
 */
function replaceClassName(element, oldName, newName) {
    var nameArr = element.className.split(" ");
    for (var i = 0; i < nameArr.length; i++) {
        if (nameArr[i] === oldName) {
            nameArr[i] = newName;
        }
    }
    element.className = nameArr.join(" ");
}


/**
 * 封装 可以获取页面滚动座标的兼容方法
 * @returns {{}}
 */
function scroll() {
    return {
        top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
    };
}


/**
 * 封装获取当前可视区的宽高client()兼容方法
 * @returns {{}}
 */
function client(){
    var clientWidth = window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth||0;
    var clientHeight = window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight||0;
    var o = {};
    o.width = clientWidth;
    o.height = clientHeight;
    return o;//把o返回,o是一个对象 ,才能调用其相关属性;
}



/**
 * 把事件对象兼容方法都封装到对象中
 */
var eventTools = {
    getTarget:function(event){
        return event.target||event.srcElement;
    },
    getPageX:function(event){
        return event.pageX||event.clientX+event.document.documentElement.scrollLeft;
    },
    getPageY:function(event){
        return event.pageY||event.clientY+event.document.documentElement.scrollTop;
    },
    getEvent:function(event){
        return event||window.event;
    },
    stopPropagation:function(event){
        if(event.stopPropagation){
            event.stopPropagation();
        }else {
            event.cancelBubble = true;//这个后面是跟着布尔值;
        }
    },
    removeEvent:function(obj,eventName,listener){
        if(obj.removeEventListener){
            obj.removeEventListener(eventName,listener,false);
        }else if(obj.detachEvent){
            obj.detachEvent("on"+eventName,listener);
        }else {
            obj["on"+eventName]=listener;
        }
    },
    addEvent:function(obj,eventName,listener){
        if(obj.addEventListener){
            obj.addEventListener(eventName,listener,false);
        }else if(obj.attachEvent){
            obj.attachEvent("on"+eventName,listener);
        }else {
            obj["on"+eventName] = listener;
        }
    }
}
