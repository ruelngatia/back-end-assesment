const sql = require('mssql')
require('dotenv').config()




const config = {
    user: "sa",
    password: "softWARE" ,
    database: "E-commerce assesment",
    server: 'localhost',
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: false, 
        trustServerCertificate: false
    }
}

// console.log(process.env);

sql.connect(config).then((pool)=>{
    if(pool.connected){
        console.log('db connected');
    }
})

module.exports = {config}

