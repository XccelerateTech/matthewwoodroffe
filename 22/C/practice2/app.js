var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){

    fs.createReadStream(__dirname + '/index.html').pipe(res);

}).listen(8080, '127.0.0.1');