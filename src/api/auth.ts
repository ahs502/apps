import * as express from 'express'
const router = express.Router()

export default router

import { login, verifyAuthCode, logout } from '../store'

router.post('/login', async (req, res, next) => {
  try {
    const app = req.body['app']
    const password = req.body['password']
    const authCode = await login(app, password, req.ip, req.headers['user-agent'])

    res
      .json({
        success: !!authCode,
        authCode
      })
      .status(200)
      .end()
  } catch (reason) {
    console.error(reason)
    res
      .send(String(reason))
      .status(500)
      .end()
  }
})

router.post('/logout', async (req, res, next) => {
  try {
    const code = req.body['code']
    await logout(code)

    res
      .send('Logged out.')
      .status(200)
      .end()
  } catch (reason) {
    console.error(reason)
    res
      .send(String(reason))
      .status(500)
      .end()
  }
})
