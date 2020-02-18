import * as express from 'express'
const router = express.Router()

export default router

router.get('/hi', function (req, res, next) {
  res
    .json({ result: 'Hi!' })
    .status(200)
    .end()
})
