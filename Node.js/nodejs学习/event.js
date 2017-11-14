/**
 * @author:huangjin
 * @parameter:
 * @description:
 * @Date:2017/11/13
 */
var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();
event.on('some_event',function () {
    console.log('some_event事件触发')
});
setTimeout(function () {
    event.emit('some_event');
},2000)