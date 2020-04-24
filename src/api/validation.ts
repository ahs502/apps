import * as express from 'express'

import withoutAuthentication from './utils/without-authentication'
import { validationVisitUp } from '../store'

const router = express.Router()

export default router

router.post(
  '/visit-up',
  withoutAuthentication(async (req, res, next) => {
    const visitStatus = await validationVisitUp()

    res.status(200).json(visitStatus).end()
  })
)
