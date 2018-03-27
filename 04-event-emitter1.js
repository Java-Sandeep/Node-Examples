//example:=> Raise and Handle Node.js events

// get the reference of EventEmitter class of events module
var events = require('events');

//create an object of EventEmitter class by using above reference
var emitter = new events.EventEmitter();

//Subscribe for add-data event
emitter.on('addData',() => {
  console.log('my add data event fired by emitter ..... !!!! ');
});

// Raising add-data event
emitter.emit('addData');
