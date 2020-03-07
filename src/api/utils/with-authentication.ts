import { Request, Response, NextFunction } from 'express'

import { App } from '../../store/types'

import { verifyAuthCode } from '../../store'

export default function withAuthentication(
  app: App,
  handle: (req: Request, res: Response, next: NextFunction, scope: any) => void | Promise<void>
): (req: Request, res: Response, next: NextFunction) => Promise<void> {
  return async (req, res, next) => {
    try {
      const authCode = req.header('auth-code')
      const verificationResult = await verifyAuthCode(app, authCode, req.ip, req.headers['user-agent'])
      if (!verificationResult.verified) {
        res
          .send(verificationResult.reason)
          .status(403)
          .end()
        return
      }
      const scope = verificationResult.scope
      handle(req, res, next, scope)
    } catch (reason) {
      console.error(reason)
      res
        .send(String(reason))
        .status(500)
        .end()
    }
  }
}