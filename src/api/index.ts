import * as express from 'express'
const router = express.Router()

export default router

import authRouter from './auth'

router.use('/auth', authRouter)
