var express = require('express');
var app = express();

app.get('/lok', function(req, res) {
    res.send('hellohellohellohellohellohellohellohellohellohello');
});

app.post('/login', function(req, res) {
    console.log(req.path);
    res.send('post received');
});

// app.get('/users/:id', function(req, res){
//     console.log('the user id is ' + req.params.id);
//     res.send(req.params.id)
// });

// app.use('/', function(req, res, next){
//     console.log('Request Url: '+ req.url);
//     next();
// });

app.listen(8080);

