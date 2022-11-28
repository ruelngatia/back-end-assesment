const {exec, query} = require('../../sqlHelper/sqlHelper')

const getAllProducts = async(req,res)=>{

    let results =await (await exec('getAllProducts')).recordset
    res.status(201).json(results)

}

const getSpecificProduct = async(req,res)=>{

    let Productname = req.params
    let results = await (await exec('getIndividualProduct',Productname)).recordset
    res.status(200).json(results)
    console.log(results);
    
}

const insertProduct = async(req,res)=>{
    let result = await (await exec('deleteProduct',id)).rowsAffected
}

const updateProduct = async(req,res)=>{

}

const deleteProduct = async(req,res)=>{
    let id = req.params
    try{
        let result = await (await exec('deleteProduct',id)).rowsAffected
        if(result > 0){
            res.status(201).json({message:'product delete successfully '})
        }else{
            res.status(401).json({message:'no such product'}) 
        }
        
    }catch(e){
        console.error(e);
        res.status(401).json({message:'no such product'})
    }

}




module.exports ={
    getAllProducts,
    getSpecificProduct,
    insertProduct,
    updateProduct,
    deleteProduct
}