import * as express from 'express'

import withoutAuthentication from './utils/without-authentication'

const router = express.Router()

export default router

router.get(
  '/:app?',
  withoutAuthentication(async (req, res, next) => {
    const app = req.param('app')
    const env = req.app.get('env')

    const config = {
      app,
      loginUrl: env === 'development' ? 'http://localhost:4000' : env === 'production' ? 'https://ahs502.ir' : undefined
    }

    const configurer = `
      ;
      (function () {
        window.config = ${JSON.stringify(config, null, 2)};
      })();
      ;
    `

    res
      .send(configurer)
      .status(200)
      .end()
  })
)
