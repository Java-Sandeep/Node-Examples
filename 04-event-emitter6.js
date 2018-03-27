var events = require('events');
var emitter = new events.EventEmitter();

function handler(){
  console.log('my handler function is calling ...... !!!!');
}

emitter.on('myEvent', handler);
emitter.emit('myEvent');
emitter.emit('myEvent');
emitter.removeListener('myEvent',handler);
emitter.emit('myEvent');
emitter.emit('myEvent');
