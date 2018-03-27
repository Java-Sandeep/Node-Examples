var emitter = require('events').EventEmitter;

var em = new emitter();

//Subscribe FirstEvent
em.addListener('FirstEvent', (data) => {
    console.log('subscriber info: ' + data);
});

//Subscribe SecondEvent
em.on('SecondEvent', (data) => {
    console.log('subscriber info: ' + data);
});

// Raising FirstEvent
em.emit('FirstEvent', 'This is first subscriber.');

// Raising SecondEvent
em.emit('SecondEvent', 'This is second subscriber.');
