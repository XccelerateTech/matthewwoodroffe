const pg = require('pg');
const fs = require('fs');

var config = {
    user: 'postgres',
    database: 'postgres',
    password: 'postgres',
    host: 'localhost',
    port: 5432,
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
}

var client = new pg.Client(config);
const inputStream = fs.createReadStream('transaction_record.csv', 'utf-8');

client.connect();



function begin(done){
    client.query('BEGIN',function(err){
        if(err){
            console.log(err);
        }
        done();
    });
}

function commit(done){
    client.query('COMMIT',function(err){
        if(err){
            console.log(err);
        }
        done();
    });
}

function rollback(done){
    client.query('ROLLBACK',function(err){
        if(err){
            console.log(err);
        }
        done();
    });
}

begin(function(){
    client.query("UPDATE bank_accounts SET amount = amount - 1000 WHERE account_holder = 'Alice'",function(err,results){
        if(err){
            rollback(function(){
                console.log("Transaction is rolled back!");
            });
        }else{
            commit(function(){
                console.log("Transaction is committed!");
            });
        }
    });
});