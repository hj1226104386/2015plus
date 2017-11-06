/**
 * Created by huangjin on 2017/3/8.
 */
var obj = {
    name:'张三',
    getData:function (n) {
        return n+1;
    }
};
console.log(obj.getData(3));

//拿到5组数据的接口
var num = 'http://buy.cqcp.net/Game/GetNum.aspx?iType=3&time=Thu%20Mar%2009%202017%2014:23:26%20GMT+0800%20(%D6%D0%B9%FA%B1%EA%D7%BC%CA%B1%BC%E4)';
//拿到第一条数据的接口
var num1 = 'http://buy.cqcp.net/Game/GetNum.aspx?iType=11&name=0.026916140269718225';


