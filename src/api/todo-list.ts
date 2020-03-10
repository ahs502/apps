import * as express from 'express'

import withAuthentication from './utils/with-authentication'
import { readTodoBook, addTodo, removeTodo, editTodo, Store } from '../store'

const router = express.Router()

export default router

type NamedBook = Store['books'][string] & {
  readonly bookName: string
}

/* prettier-ignore */ ''; // In order to prevent syntax highlighter from messing up!

router.get(
  '/book',
  withAuthentication('todo-list', async (req, res, next, scope) => {
    const bookName = getBookName(scope)

    const book = await readTodoBook(bookName)
    const namedBook: NamedBook = {
      bookName,
      ...book
    }

    res
      .json(namedBook)
      .status(200)
      .end()
  })
)

router.post(
  '/book/todo',
  withAuthentication('todo-list', async (req, res, next, scope) => {
    const { title, position } = req.body || {}
    const bookName = getBookName(scope)

    const book = await addTodo(bookName, title, position)
    const namedBook: NamedBook = {
      bookName,
      ...book
    }

    res
      .json(namedBook)
      .status(200)
      .end()
  })
)

router.delete(
  '/book/todo',
  withAuthentication('todo-list', async (req, res, next, scope) => {
    const { id } = req.body || {}
    const bookName = getBookName(scope)

    const book = await removeTodo(bookName, id)
    const namedBook: NamedBook = {
      bookName,
      ...book
    }

    res
      .json(namedBook)
      .status(200)
      .end()
  })
)

router.put(
  '/book/todo',
  withAuthentication('todo-list', async (req, res, next, scope) => {
    const { id, title, checked, position } = req.body || {}
    const bookName = getBookName(scope)

    const book = await editTodo(bookName, id, title, checked, position)
    const namedBook: NamedBook = {
      bookName,
      ...book
    }

    res
      .json(namedBook)
      .status(200)
      .end()
  })
)

function getBookName(scope: any): string {
  return scope || '_public_'
}
