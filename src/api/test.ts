import * as express from 'express'
const router = express.Router()

export default router

// import store from '../store'

router.get('/count', function (req, res, next) {
  // let count: number = store.count || 0
  // store.count = count = count + 1

  res
    .json({ result: 0 })
    .status(200)
    .end()
})
