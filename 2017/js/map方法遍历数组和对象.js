/**
 * @author:huangjin
 * @parameter:
 * @description: map方法遍历数组/对象
 * @Date:2017/11/14
 */

// map方法遍历可以有返回值

var products = [
    {name: '鼠标', price: 20},
    {name: '键盘', price: 40},
    {name: '耳机', price: 60},
    {name: '显示屏', price: 80}
]
function saleProducts(products) {
    let saleProducts = products.map( product => {
        console.log(product)
        return {
            name: product.name,
            price: product.price / 2
        }
    })
    return saleProducts
}
console.log(saleProducts(products))