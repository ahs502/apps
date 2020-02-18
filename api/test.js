const express = require('express')
const router = express.Router()

module.exports = router

router.get('/hi', function(req, res, next) {
  res
    .json({ result: 'Hi!' })
    .status(200)
    .end()
})
