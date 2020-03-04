import * as express from 'express'
const router = express.Router()

export default router

import { login, verifyAuthCode, logout } from '../store'

router.get('/login', async (req, res, next) => {
  console.log(req.query['password'])
  const authCode = await login('todo-list', req.query['password'], req.ip, req.headers['user-agent'])
  console.log(authCode)

  res
    .send(authCode)
    .status(200)
    .end()
})

router.get('/verify', async (req, res, next) => {
  const result = await verifyAuthCode('todo-list', req.query['code'], req.ip, req.headers['user-agent'])

  res
    .json(result)
    .status(200)
    .end()
})

router.get('/logout', async (req, res, next) => {
  await logout(req.query['code'])

  res
    .send('')
    .status(200)
    .end()
})
