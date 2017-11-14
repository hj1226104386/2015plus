/**
 * @author:huangjin
 * @parameter:
 * @description:
 * @Date:2017/11/13
 */
var buf = new Buffer(256);
len = buf.write('我在北京，你在哪儿？');
console.log('写入字节数：' + len)
// 将buffer对象转为字符串
console.log(buf.toString('utf8',0,10))

// 将buffer对象转为json
console.log(buf.toJSON())