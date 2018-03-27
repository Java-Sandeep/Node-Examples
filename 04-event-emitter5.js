var events = require('events');
var EventEmitter = events.EventEmitter;

var emitter = new EventEmitter();

emitter.on('myEvent',() => {
  console.log('my event 3 calling');
});

emitter.on('myEvent',() => {
  console.log('my event 1 calling');
});

emitter.on('myEvent',() => {
  console.log('my event 2 calling');
});

emitter.emit('myEvent');

console.log(EventEmitter.listenerCount(emitter,'myEvent'));
