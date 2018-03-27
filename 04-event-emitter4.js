var events = require('events');
var emitter = new events.EventEmitter();

var uname = "sandeep";
var mobile = 1234567890;

// only one time event will get called (emitter.once)
emitter.once('addUser',(user,no) => {
  console.log("User Information :=> ");
  console.log("User Name : " + uname);
  console.log("User Mobile no : " + no);
});

emitter.emit('addUser',uname,mobile);

uname = "rohit";
mobile = 2345623456;
emitter.emit('addUser',uname,mobile);
