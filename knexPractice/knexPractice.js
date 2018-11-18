// var pg = require('pg');

// var config = {
//     user: 'postgres',
//     database: 'knexPractice',
//     password: 'postgres',
//     host: 'localhost',
//     port: 5432,
//     max: 10, // max number of clients in the pool
//     idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
// }

// var client = new pg.Client(config);

// client.connect();

// client.query('SELECT * FROM testtable', function(err, results) {
//     if(err) {
//         console.log(err);
//     }
//     console.log(results.rows);
// })





// const knex = require('knex')({
//     client: 'postgresql',
//     connection: {
//         database: "knexPractice",
//         user: "postgres",
//         password: "postgres"
//     }
// });

// let query = knex('testtable').insert({name:"tom",color:"red",bread:"multigrain"});

// query.then(()=>{
// console.log('should work?1')
// })
// .catch((err)=>{
//     console.log(err)
// })

// let action1 = knex.insert({name:"john", color: "blue", bread:"wheat"}).into("testtable");

// action1.then(()=>{
//     console.log('should work?2')
//     })
//     .catch((err)=>{
//         console.log(err)
//     })





// let query = knex.select("*").from("testtable");
// // .where("name","Fozzie");
// console.log(query.toSQL());

// query.then((rows)=>{
//     // You can access the fetched row here.
//     console.log(rows);
// }).catch((error)=>{
//     console.log(error);
//     //Handle the error here.
// });

// let query2 = knex.select("*").from("testtable2")
//     .innerJoin("testtable3", function() {
//         this.on('testtable2.id', '=', 'testtable3.id')
//     })
//     console.log(query2.toSQL());

// query2.then((rows)=>{
//     // You can access the fetched row here.
//     console.log(rows);
// }).catch((error)=>{
//     console.log(error);
//     //Handle the error here.
// });




var Promise = require('bluebird');

// Using trx as a query builder:
knex.transaction(function(trx) {

    var dogs = [
        {name: 'Hissy', color: 'orange', bread: 'wonder'}
    ];

    return trx
    .insert({name: 'Canterbury Tales', color: 'orange', bread: 'wonder'})
    .into('testtable')
    .then(function(ids) {
        return Promise.map(dogs, function(book) {
            book.catalogue_id = ids[0];

            // Some validation could take place here.

            return trx.insert(book).into('books');
        });
    });
})
.then(function(inserts) {
    console.log(inserts.length + ' new books saved.');
})
.catch(function(error) {
    // If we get here, that means that neither the 'Old Books' catalogues insert,
    // nor any of the books inserts will have taken place.
    console.error(error);
});