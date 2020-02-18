const express = require('express')
const router = express.Router()

module.exports = router

const testRouter = require('./test')

router.use('/test', testRouter)
