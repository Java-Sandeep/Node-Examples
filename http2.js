var http = require('http');

var server = http.createServer(function (req, res) {

    if (req.url == '/') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.write(JSON.stringify({ "name": "Sandeep pal",
                                        "email" : "sandeep@gmail.com",
                                        "mobile" : 8149585743,
                                        "domain" : "full stack developer",
                                        "technology known" : ['java','spring','hibernate','MEAN stack','Mysql']
                                      }));
            res.end();
    }
});

server.listen(3000);

console.log('Node.js web server at port 3000 is running..')
