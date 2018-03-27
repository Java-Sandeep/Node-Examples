// error heandling in asynchronous programming
var fs = require('fs');
var domain = require('domain').create();

domain.run(function(){
  fs.readFile('infohkhj.txt','utf8',function(err,data){
    if(err)
        throw err;

    console.log(data);
  });
});

domain.on('error',function(error){
  console.log("The error has been caught .......!!!!!");
});
