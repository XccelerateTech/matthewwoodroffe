var pg = require('pg');

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

client.connect();

client.query('SELECT * FROM citrus', function(err, results) {
    if(err) {
        console.log(err);
    }
    for(let i =0; i < results.rows.length; i++) {
        if(results.rows[i].color == 'orange') {
            console.log(results.rows[i]);
        }
    }
})