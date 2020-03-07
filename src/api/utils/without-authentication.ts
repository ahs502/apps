import { Request, Response, NextFunction } from 'express'

export default function withoutAuthentication(
  handle: (req: Request, res: Response, next: NextFunction) => void | Promise<void>
): (req: Request, res: Response, next: NextFunction) => Promise<void> {
  return async (req, res, next) => {
    try {
      handle(req, res, next)
    } catch (reason) {
      console.error(reason)
      res
        .send(String(reason))
        .status(500)
        .end()
    }
  }
}
