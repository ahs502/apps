import * as express from 'express'

import withoutAuthentication from './utils/without-authentication'
import { login, logout } from '../store'

const router = express.Router()

export default router

router.post(
  '/login',
  withoutAuthentication(async (req, res, next) => {
    const { app, password } = req.body || {}

    const authCode = await login(app, password, req.ip, req.headers['user-agent']!)

    res
      .status(200)
      .json({
        success: !!authCode,
        authCode
      })
      .end()
  })
)

router.post(
  '/logout',
  withoutAuthentication(async (req, res, next) => {
    const { authCode } = req.body || {}

    await logout(authCode)

    res.status(200).send('Logged out.').end()
  })
)
