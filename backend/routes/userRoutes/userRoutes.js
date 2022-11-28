const {Router} = require('express')
const userRouter = Router()

const {loginUser} = require('../../controllers/user/userController')


userRouter.post('/login',loginUser)

module.children = {userRouter}