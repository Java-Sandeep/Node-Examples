var http = require('http');
var fs = require('fs');
var url = require('url');

//http://localhost:3000/check?email=sandeep%40gmail.com&pass=1234


var server = http.createServer(function (req, res) {
    var path = url.parse(req.url, true);

    var pageInfo = '';
    if (req.url == '/') {
      res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.readFile('home.html',function(err,data){
          if(err)
            return err;
          res.write(data.toString());
          console.log(req.method);
          res.end();
        });
    }
    if (req.url == '/login') {
      res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.readFile('login.html',function(err,data){
          if(err)
            return err;
          res.write(data.toString());
          console.log(req.method);
          res.end();
        });
    }
    if (req.url == '/register') {
      res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.readFile('register.html',function(err,data){
          if(err)
            return err;
          res.write(data.toString());
          console.log(req.method);
          res.end();
        });
    }
    else if (path.pathname == '/logincheck'){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        var query = path.query;
        res.write("<h1>email id : "+ query.email +'<br>');
        res.write("Password : "+ query.pass+"</h1>");
        res.end();
    }
    else if (path.pathname == '/getregister'){
        res.writeHead(200, { 'Content-Type': 'text/html'});
        var query = path.query;
        console.log(query);
        fs.writeFile("info.txt", JSON.stringify(query), function(err) {
            if(err) {
                return console.log(err);
            }
            console.log("The file was saved!");
        });
        res.end('data added');
    }
});

server.listen(3000);

console.log('Node.js web server at port 3000 is running..')
