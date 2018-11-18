const knex = require('knex')({
    client: 'postgresql',
    connection: {
        database: "postgres",
        user: "postgres",
        password: "postgres"
    }
});

let query = knex.select("*").from("citrus").innerJoin("stock","citrus.id","stock.citrus_id");
                                
console.log(query.toSQL()); // You can print the SQL in this way.

query.then((rows)=>{
    // You can access the fetched row here.
    console.log(rows);
}).catch((error)=>{
    console.log(error);
    //Handle the error here.
});

const inputStream = fs.createReadStream('transaction_record.csv', 'utf-8');