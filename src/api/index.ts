import * as express from 'express'
const router = express.Router()

export default router

router.get('/ping', async (req, res, next) => {
  res
    .send('pong')
    .status(200)
    .end()
})

import configRouter from './config'
router.use('/config', configRouter)

import authRouter from './auth'
router.use('/auth', authRouter)

import todoListRouter from './todo-list'
router.use('/todo-list', todoListRouter)
