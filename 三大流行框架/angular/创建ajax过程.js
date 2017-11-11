/**
 * Created by Administrator on 2016/12/27.
 */

//创建对象
var xhr = new XMLHttpRequest();
//打开链接
xhr.open("get","http://www.baidu.com");
//发送数据
xhr.send(null);
//接收数据;
xhr.onreadystatechange = function () {
    if(readystate ==4&&status==200){
        var data = xhr.responseText;
        console.log("成功,返回的数据为data");
    }
}