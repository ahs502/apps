import * as express from 'express'

import withoutAuthentication from './utils/without-authentication'
import { login, logout } from '../store'

const router = express.Router()

export default router

router.post(
  '/login',
  withoutAuthentication(async (req, res, next) => {
    const { app, password } = req.body || {}

    const authCode = await login(app, password, req.ip, req.headers['user-agent'])

    res
      .json({
        success: !!authCode,
        authCode
      })
      .status(200)
      .end()
  })
)

router.post(
  '/logout',
  withoutAuthentication(async (req, res, next) => {
    const { authCode } = req.body || {}

    await logout(authCode)

    res
      .send('Logged out.')
      .status(200)
      .end()
  })
)
