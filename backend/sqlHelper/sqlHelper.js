const config = require('../sqlConnections/databaseConnections')
const sql = require('mssql')


 class SQLHelper{

    constructor(){
        this.connectionPool = this.createConnection(config)
        this.getIndividualProduct()
    }

    createConnection = async(config)=>{
        try{
            let pool =await sql.connect(config)
            return pool
        }catch(e){
            throw new Error(e)
        }
    }

    createRequest = async(request,data ={})=>{
        const key = Object.keys()
        key.map((item)=>{
            
        })
    }

    // getAllProducts = async(procedure)=>{
    //     let pool = await this.connectionPool
    //     let results = await (await pool.request().execute('getAllProducts')).recordset
    //     console.log(results);
    // }

  
}

module.exports = {exec: new SQLHelper().getAllProducts}

let a = new SQLHelper()