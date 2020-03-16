import { Request, Response, NextFunction } from 'express'

import { verifyAuthCode, App } from '../../store'

export default function withAuthentication(
  app: App,
  handle: (req: Request, res: Response, next: NextFunction, scope: any) => void | Promise<void>
): (req: Request, res: Response, next: NextFunction) => Promise<void> {
  return async (req, res, next) => {
    try {
      const authCode = req.header('auth-code')
      const verificationResult = await verifyAuthCode(app, authCode, req.ip, req.headers['user-agent'])

      if (!verificationResult.verified) {
        console.error('Unauthorized access (401):', verificationResult.reason)
        res
          .status(401)
          .send(verificationResult.reason)
          .end()
        return
      }

      const scope = verificationResult.scope
      handle(req, res, next, scope)
    } catch (reason) {
      console.error(reason)
      res
        .status(500)
        .send(String(reason))
        .end()
    }
  }
}
