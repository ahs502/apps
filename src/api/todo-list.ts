import * as express from 'express'

import withAuthentication from './utils/with-authentication'
import { readTodoBook, addTodo, removeTodo, editTodo, Store } from '../store'

const router = express.Router()

export default router

type NamedBookData = Omit<Store['books'][string], 'idBase'> & {
  readonly name: string
}

/* prettier-ignore */ ''; // In order to prevent syntax highlighter from messing up!

router.get(
  '/book',
  withAuthentication('todo-list', async (req, res, next, scope) => {
    const name = getBookName(scope)

    const { idBase, ...bookData } = await readTodoBook(name)
    const namedBookData: NamedBookData = { name, ...bookData }

    res
      .status(200)
      .json(namedBookData)
      .end()
  })
)

router.post(
  '/book/todo',
  withAuthentication('todo-list', async (req, res, next, scope) => {
    const { bookTimestamp, title, position } = req.body || {}
    const name = getBookName(scope)

    const { idBase, ...bookData } = await addTodo(name, bookTimestamp, title, position)
    const namedBookData: NamedBookData = { name, ...bookData }

    res
      .status(200)
      .json(namedBookData)
      .end()
  })
)

router.delete(
  '/book/todo',
  withAuthentication('todo-list', async (req, res, next, scope) => {
    const { bookTimestamp, id } = req.body || {}
    const name = getBookName(scope)

    const { idBase, ...bookData } = await removeTodo(name, bookTimestamp, id)
    const namedBookData: NamedBookData = { name, ...bookData }

    res
      .status(200)
      .json(namedBookData)
      .end()
  })
)

router.put(
  '/book/todo',
  withAuthentication('todo-list', async (req, res, next, scope) => {
    const { bookTimestamp, id, title, checked, position } = req.body || {}
    const name = getBookName(scope)

    const { idBase, ...bookData } = await editTodo(name, bookTimestamp, id, title, checked, position)
    const namedBookData: NamedBookData = { name, ...bookData }

    res
      .status(200)
      .json(namedBookData)
      .end()
  })
)

function getBookName(scope: any): string {
  return scope || '_public_'
}
