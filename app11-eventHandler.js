//load MyEmitter
const MyEmitter = require('./app11-eventEmitter');
var emitter = new MyEmitter();

//register an event handler
emitter.on('myEvent', function myHandler(e){
    console.log(e);
});
//raise a myEvent once
emitter.emitEvent();
