#!/usr/bin/env node

const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const http = require('http')

require('colors')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use(express.static(path.join(__dirname, 'public')))

const apiRouter = require('./api')
app.use('/api', apiRouter)

app.use((req, res, next) => {
  next(createError(404))
})
app.use((err, req, res, next) => {
  console.error('>> Error:'.bold.red, err)

  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  res.status(err.status || 500)
  res.send(err)
})

const port = process.env.PORT || '12345'
app.set('port', port)

const server = http.createServer(app)

server.listen(port)

server.on('error', error => {
  if (error.syscall !== 'listen') throw error

  const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port

  switch (error.code) {
    case 'EACCES':
      console.error(`>> ${bind} requires elevated privileges.`.red)
      process.exit(1)
      break
    case 'EADDRINUSE':
      console.error(`>> ${bind} is already in use.`.red)
      process.exit(1)
      break
    default:
      throw error
  }
})

server.on('listening', () => {
  const address = server.address()
  const addressType = typeof address === 'string' ? 'pipe' : 'port'

  console.log(('>>'.bold + ` Server is listening on ${addressType} ${String(port).bold}:\n`).green)
})
