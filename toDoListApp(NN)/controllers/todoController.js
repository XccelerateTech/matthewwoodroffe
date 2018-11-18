
let bodyParser = require('body-parser');
let urlencodedParser = bodyParser.urlencoded({extended: false});

let data = [{item: 'Something'}, {item: 'Something else'}];

module.exports = function(app) {
    //handlers that are fired when ajax request is made.
    app.get('/todo' , function(req, res) {
        res.render('todo', {todos: data}); //we just need the view name here
    }); 

    app.post('/todo' , urlencodedParser, function(req, res) {
        data.push(req.body); //need to access the body of what is received from AJAX.  I tried with just req but did not work.  I guess this is due to the format it is sent in.
        //sending data back to todoList.js
        console.log(data);
        res.json(data);
    });

    app.delete('/todo/:item', function(req, res) {
        data = data.filter(function(todo) {
            return todo.item.replace(/ /g, '-') !== req.params.item;
        });
        res.json(data);
    }); 

};