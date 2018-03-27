var events = require('events');
var emitter = new events.EventEmitter();

// initilizing some data for emitter arugument
var uname = "sandeep";
var mobile = 1234567890;

emitter.on('addUser',function(user,no){
  console.log("User Information :=> ");
  console.log("User Name : " + uname);
  console.log("User Mobile no : " + no);
});

emitter.emit('addUser',uname,mobile);
