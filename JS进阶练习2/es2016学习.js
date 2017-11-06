/**
 * @author:huangjin
 * @parameter:
 * @description:
 * @Date:2017/7/10
 */

//1、变量声明（let、const）
//let声明变量作用域为当前代码块中({}为代码块)
//es2015不合理现象1
/*var name = '黄锦';
 while(true){
 var name = '武昌理工学院';
 console.log(name);
 break;
 }
 console.log(name);*/
//解决办法
/*var name = '黄锦';
 while (true) {
 let name = '武昌理工学院';
 console.log(name);
 break;
 }
 console.log(name);*/

//es2015不合理现象2，for循环的时候声明的i变量为全局变量，使用let声明，成为局部变量
/* var a = [];
 for(var i = 0;i<10;i++){
 a[i] = function () {
 console.log(i);
 };
 }
 a[6]();//10 注意，在循环的时候函数都只是声明，并没有执行，而i是全局变量*/

//solution
/*var a = [];
for (let i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i);
    };
}
a[6]();//6*/

//es6语法允许这么写
/*let cat = {type:'animal',number:4};
let {type,number} = cat;
console.log(type,number);//animal、4*/

//default，rest
    //default：指定默认值
/*function num(type='cat') {//es6指定默认值方式
    console.log(type);
}
num();*/

//获取所有的实参（传统方法是用arguments）
/*function fn(...types) {//types保存有所有实参
    console.log(types)
}
fn('黄锦','周瑜','周文亮');//输出['黄锦','周瑜','周文亮']*/


