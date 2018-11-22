
let bodyParser = require('body-parser');
const fs = require('fs');
let urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app) {
    //handlers that are fired when ajax request is made.
    app.get('/todo' , function(req, res) {
        fs.readFile('notes.json', function(err, data) {
            let data1 = JSON.parse(data);
            res.render('todo', {todos: data1}); //we just need the view name here
        });
    }); 

    app.post('/todo' , urlencodedParser, function(req, res) {
        fs.readFile('notes.json', function(err, data) {
            let data1 = JSON.parse(data);
            data1.push(req.body);
            data2 = JSON.stringify(data1);
            fs.writeFile('notes.json', data2, function() {
                console.log('The file has been saved!')
            })
            res.json(data2);
        }); 
    });

    app.delete('/todo/:item', function(req, res) {
        fs.readFile('notes.json', function(err, data) {
            let data1 = JSON.parse(data);
            console.log(data1)
            data1 = data1.filter(function(todo) {
                return todo.item.replace(/ /g, '-') !== req.params.item;
            });
            console.log(data1);
            data2 = JSON.stringify(data1);
            console.log(data2);
            fs.writeFile('notes.json', data2, function() {
                console.log('The file has been saved!')
            })
            res.json(data2);
        });
    }); 
};