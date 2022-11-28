const {Router} = require('express')
const productsRouter= Router()
const {getSpecificProduct,getAllProducts,deleteProduct, insertProduct} = require('../../controllers/products/productsController')


productsRouter.get('/',getAllProducts)
productsRouter.get('/:Productname',getSpecificProduct)
productsRouter.delete('/delete/:id',deleteProduct)
productsRouter.post('/addprpducts',insertProduct)


module.exports = {productsRouter}