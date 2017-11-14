/**
 * Created by huangjin on 2017/11/13 0013.
 */
define(function (require,exports,module) {
    console.log('b模块被加载之前')
    // var b = require('./b') // 同步加载
    var b = require.async('./b')  // 异步加载
    console.log('b模块被加载之后')
})