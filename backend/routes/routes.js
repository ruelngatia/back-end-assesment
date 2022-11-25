const express= require('express')
const { default: SQLHelper } = require('../sqlHelper/sqlHelper')
const router = express.Router()
const {getAllProducts} = require('../sqlHelper/sqlHelper')


router.get('/',getAllProducts)
