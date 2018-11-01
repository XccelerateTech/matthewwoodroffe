var express = require('express');
var app = express();

app.use('/flowershop', express.static('flowershop'));

// app.get('/', function(req, res) {
//     res.send('print something');
// });

// app.post('/login', function(req, res) {
//     console.log(req.path);
//     res.send('post received');
// });

app.listen(8080);