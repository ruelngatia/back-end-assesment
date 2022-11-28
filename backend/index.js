const express = require('express')
const {productsRouter} = require('./routes/productRoutes/productRoutes')
const {userRouter} = require('./routes/userRoutes/userRoutes')
const app = express()

app.use(express.json())
app.use('/',productsRouter)
app.use('/user',userRouter)


app.listen(4000,()=>{
    console.log('listening to port 4000');
})