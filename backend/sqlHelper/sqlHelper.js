const config = require('../sqlConfig/databaseConnections')
const sql = require('mssql')


 class SQLHelper{

    constructor(){
        this.connectionPool = this.createConnection(config)
    }

    createConnection = async(config)=>{
        try{
            let pool =await sql.connect(config)
            return pool
        }catch(e){
            throw new Error(e)
        }
    }

    createRequest = (request,data ={})=>{
        const keys = Object.keys(data)  
        keys.map((keyValue)=>{
           request.input(keyValue,data[keyValue]) 
        })
        return request
    }

    exec = async(storedProcedure,data={})=>{
        let request = await (await this.connectionPool).request()
        request = this.createRequest(request,data)
        let result = await request.execute(storedProcedure)
        return result
    }

    query = async(query)=>{
        let results = await (await this.connectionPool).request().query(query)
        return results;
    }

}

module.exports = {
    exec: new SQLHelper().exec,
    query: new SQLHelper().query,
}

