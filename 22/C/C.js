var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){

    if(req.url === '/') {
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    } else if(req.url === '/assets/flower-icon.png') {
        fs.createReadStream(__dirname + '/assets/flower-icon.png').pipe(res);
    } else if(req.url === '/assets/flowershop.jpg') {
        fs.createReadStream(__dirname + '/assets/flowershop.jpg').pipe(res);
    } else if(req.url === '/assets/logo.png') {
        fs.createReadStream(__dirname + '/assets/logo.png').pipe(res);
    } else if(req.url === '/assets/payment-icon.png') {
        fs.createReadStream(__dirname + '/assets/payment-icon.png').pipe(res);
    } else if(req.url === '/assets/truck-icon.png') {
        fs.createReadStream(__dirname + '/assets/truck-icon.png').pipe(res);
    } else if(req.url === '/styles.css') {
        fs.createReadStream(__dirname + '/styles.css').pipe(res);
    } else {
        res.writeHead(404);
        res.end();
    }


}).listen(8080, '127.0.0.1');