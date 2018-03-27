// error heandling for synchronus programming uses try-catch-finally
// error heandling in asynchronous programming
var fs = require('fs');
var file = 'info.txt';

fs.exists(file,function(exists){
  if(exists){
    fs.stat(file,function(err,stat){
      if(err)
          throw err;
      if(stat.isFile()){
        fs.readFile(file,'utf8',function(err,data){
          if(err)
            throw err;
          console.log(data);
        });
      }
    });
  }
  else{
    console.log("file doesn't exist")
  }
});
process.on("uncaughtException",function(error){
  console.log("The exception has been caught");
});
