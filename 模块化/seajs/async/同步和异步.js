/**
 * Created by huangjin on 2017/11/13 0013.
 */
// 吃饭-》睡觉-》打豆豆

function sleep() {
    console.log('睡觉')
}
function hitDD() {
    console.log('打豆豆')
}
// 控制异步执行时机
function eat() {
    console.log('吃饭')
    process.nextTick(function () {
        // 睡觉
        sleep()
        // 接着打豆豆
        hitDD();
    })
}
eat();