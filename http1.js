var http = require('http');
var server = http.createServer(function (req, res) {

    if (req.url == '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><h1><a href="aboutus">About us</a></h1></body></html>');
        res.end();
    }
    else if (req.url == "/aboutus") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><h1>This is About us Page request.</h1></body></html>');
        res.end();

    }
    else if (req.url == "/contact") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><h1>This is Contact Page request.</h1></body></html>');
        res.end();

    }
    else
        res.end('<h1>Sorry this request not avaliable ...... !!!!!!!</h1>');
});

server.listen(3000);

console.log('Node.js web server at port 3000 is running..')
