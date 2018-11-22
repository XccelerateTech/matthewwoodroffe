let bodyParser = require('body-parser');
const fs = require('fs');

let urlencodedParser = bodyParser.urlencoded({extended: false});


//configures and runs the database server.
var pg = require('pg');
var config = {
    user: 'postgres',
    database: 'todolist',
    password: 'postgres',
    host: 'localhost',
    port: 5432,
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
}
var client = new pg.Client(config);
client.connect();


module.exports = function(app) {


    app.get('/todo', function (req,res){
        client.query('SELECT text FROM lists', function(err, results) {
          if(err) {
              console.log(err);
          }
          let data = results.rows;
          console.log("This is data return " + data);
            res.render('todo', {todos: data})
        })  
      })

    app.post('/todo' , urlencodedParser, function(req, res) {
        let receivedData = req.body;
        let textData = receivedData.item;
        client.query(`INSERT INTO lists (text) VALUES ('${textData}')`, function(err, results) {
        if(err) {
            console.log(err);  
        }
        res.send(results);
        })
    })

    app.delete('/todo/:item', function(req, res) {
        client.query('SELECT text FROM lists', function(err, results) {
            if(err) {
                console.log(err);
            }
            let data = results.rows;
            console.log("This is the delete data var " + data);
            
            data1 = data.filter(function(todo) {
                return todo.text.replace(/ /g, '-') !== req.params.item;
            });
            console.log("This is the delete data1 var " + data1);

            let data2 = data1.text;
            console.log("This is the delete data2 var " + data2);

            client.query(`DELETE FROM lists`, function(err, results) {
                if(err) {
                    console.log(err);
                }
                console.log("This should be an empty table " + results);
            })
            for (let i = 0; i < data1.length; i++) {
                client.query(`INSERT INTO lists (text) VALUES ('${data1[i].text}')`, function(err, results) {
                if(err) {
                    console.log(err);  
                }
                    
                })  
            }
            res.send(results);
            
            // client.query(`DELETE FROM lists WHERE text = '${data2}'`, function(err, results) {
            //     res.send(results);
            // })
        })
    });

    // app.delete('/todo/:item', function(req, res) {
    //     fs.readFile('notes.json', function(err, data) {
    //         let data1 = JSON.parse(data);
    //         console.log(data1)
    //         data1 = data1.filter(function(todo) {
    //             return todo.item.replace(/ /g, '-') !== req.params.item;
    //         });
    //         console.log(data1);
    //         data2 = JSON.stringify(data1);
    //         console.log(data2);
    //         fs.writeFile('notes.json', data2, function() {
    //             console.log('The file has been saved!')
    //         })
    //         res.json(data2);
    //     });
    // }); 
};

