var fs = require('fs');

fs.readFile('info.txt','utf8',function(error,data){
  if(error)
      throw error;
  console.log(data);
});

// uncaughtException ---> it will treat as a event.
process.on("uncaughtException",function(error){
  console.log("The error has been caught");
});
