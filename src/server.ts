#!/usr/bin/env node

import * as path from 'path'
import * as express from 'express'
import * as cookieParser from 'cookie-parser'
import * as http from 'http'
import * as createError from 'http-errors'

import 'colors'

const app = express()

const env = process.env['ENV'] || 'production' // 'development' or 'production'
app.set('env', env)

const port = process.env['PORT'] || '3000'
app.set('port', port)

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use((req, res, next) => {
  console.log(req.method.cyan, req.url)
  next()
})

app.use('/auth', express.static(path.join(__dirname, '../public/auth')))
app.use('/', express.static(path.join(__dirname, '../public/website')))
app.use('/todo-list', express.static(path.join(__dirname, '../public/todo-list')))
app.use('/validation', express.static(path.join(__dirname, '../public/validation')))

import apiRouter from './api'
app.use('/api', apiRouter)

app.use((req, res, next) => {
  next(createError(404))
})
app.use((err, req, res, next) => {
  console.error('>> Error:'.red.bold, err)

  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  res.status(err.status || 500)
  res.send(err)
})

const server = http.createServer(app)

server.listen(port)

server.on('error', (error: any) => {
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
