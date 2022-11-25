const sql = require('mssql')
const env = require('dotenv')
env.config()



const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASS ,
    database: process.env.DB_NAME,
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


sql.connect(config).then((pool)=>{
    if(pool.connected){
        console.log('db connected');
    }
})

module.exports = {config}

