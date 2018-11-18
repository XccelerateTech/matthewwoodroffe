//server side app.

const express = require('express');

let app = express();

//tell's app that all client side javascript/css/html documents etc will be kept in the /public folder. 
app.use(express.static('public'));

//router to get and display index page.
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/index.html');
})

app.listen(8080);
console.log(`You are listening to port 8080`);