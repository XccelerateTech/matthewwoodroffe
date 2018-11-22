const express = require('express');
const hb = require('express-handlebars');
const todoControlller = require('./controllers/todoController')

let app = express();

//setup template engine
app.engine('handlebars' , hb({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//static files
app.use(express.static('./public'));

//fire controller
todoControlller(app);

//listen to port
app.listen(3000);
console.log('You are listening to port 3000');


let objectNew = {
    aName: data,
}
