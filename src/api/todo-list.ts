import * as express from 'express'

import withAuthentication from './utils/with-authentication'
import { readTodoBook, addTodo, removeTodo, editTodo, Store } from '../store'

const router = express.Router()

export default router

type NamedBook = Store['books'][string] & {
  readonly name: string
}

/* prettier-ignore */ ''; // In order to prevent syntax highlighter from messing up!

router.get(
  '/book',
  withAuthentication('todo-list', async (req, res, next, scope) => {
    const name = getBookName(scope)

    const book = await readTodoBook(name)
    const namedBook: NamedBook = { name, ...book }

    res
      .status(200)
      .json(namedBook)
      .end()
  })
)

router.post(
  '/book/todo',
  withAuthentication('todo-list', async (req, res, next, scope) => {
    const { title, position } = req.body || {}
    const name = getBookName(scope)

    const book = await addTodo(name, title, position)
    const namedBook: NamedBook = { name, ...book }

    res
      .status(200)
      .json(namedBook)
      .end()
  })
)

router.delete(
  '/book/todo',
  withAuthentication('todo-list', async (req, res, next, scope) => {
    const { id } = req.body || {}
    const name = getBookName(scope)

    const book = await removeTodo(name, id)
    const namedBook: NamedBook = { name, ...book }

    res
      .status(200)
      .json(namedBook)
      .end()
  })
)

router.put(
  '/book/todo',
  withAuthentication('todo-list', async (req, res, next, scope) => {
    const { id, title, checked, position } = req.body || {}
    const name = getBookName(scope)

    const book = await editTodo(name, id, title, checked, position)
    const namedBook: NamedBook = { name, ...book }

    res
      .status(200)
      .json(namedBook)
      .end()
  })
)

function getBookName(scope: any): string {
  return scope || '_public_'
}
