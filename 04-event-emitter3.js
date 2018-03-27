var events = require('events');
var emitter = new events.EventEmitter();

var uname = "sandeep";
var mobile = 1234567890;

emitter.on('addUser',function(user,no){
  console.log("User Information :=> ");
  console.log("User Name : " + user);
  console.log("User Mobile no : " + no);
});

emitter.emit('addUser',uname,mobile);

uname = "rohit";
mobile = 2345623456;
emitter.emit('addUser',uname,mobile);
