import * as express from 'express'
const router = express.Router()

export default router

import testRouter from './test'

router.use('/test', testRouter)
