const pg = require("pg")

const client = new pg.Client({
    host: "localhost",
    port: 5435,
    database: "curso",
    user:"postgres",
    password:"postgres"

})
async function query(sql) {
    await client.connect();
    const r = await client.query("select * from customers where customer_id= $1, ['ALFKI']);
    console.log(r.rows);
    await client.end();
}
client.connect().then((client))=> {
    client.query("select unit_price from products",[]).then (data => {
        console.log(data.rows);
        client.end();
    }).catch(e => {
        console.log("error", e.message);
    })
}
