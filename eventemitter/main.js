var events=require('events');
var eventEmitter=new events.EventEmitter();

var listener1=function listener1(){
console.log('监听器1执行');
}

var listener2=function listener2(){
console.log('监听器2执行');
}

// connection事件在服务器端当有一个新的连接时，触发

//为connection事件添加监听器，
eventEmitter.on('connection',listener1);

//为connection事件添加监听器，
eventEmitter.on('connection',listener2);

var eventListeners=require('events').EventEmitter.listenerCount(eventEmitter,'connection');

console.log(eventListeners+"个监听器连接事件");

// 处理connection事件
eventEmitter.emit('connection');


// 移除监听绑定的listener事件
eventEmitter.removeListener('connection',listener1);
console.log("listener1 不再收监听");


// 触发连接事件
eventEmitter.emit('connection');

eventListeners=require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " 个监听器监听连接事件。");

console.log("程序执行完毕。");

