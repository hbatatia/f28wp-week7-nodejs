//load the class EventEmitter
const EventEmitter = require('events'); //this is a class
//instantiate the class
const emitter = new EventEmitter();

//register an event handler
emitter.on('myEvent', function myHandler(event){
    //simple handler of the event that prints a message out
    console.log(event);
});
//raise  myEvent  every 10 ms
var eventTimer = null;
var eventCounter = 0;
emitEvent();

//emit an event and reniew the timer
//we stop emitting after 10 times
function emitEvent() {
    var eDate = new Date();
    var file = path.parse(__filename).base;
    emitter.emit('myEvent', { name: 'MyEvent', date: eDate, module: file }); //
    eventCounter++;
    if (eventCounter >= 10)
        clearTimeout(eventTimer);
    else
        eventTimer = setTimeout(emitEvent, 10);
}