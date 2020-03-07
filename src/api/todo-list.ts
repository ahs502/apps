import * as express from 'express'

import withAuthentication from 'src/api/utils/with-authentication'
import { readTodoBook, addTodo, removeTodo, editTodo } from '../store'

const router = express.Router()

export default router

router.get(
  '/book',
  withAuthentication('todo-list', async (req, res, next, scope) => {
    const bookName = getBookName(scope)

    const todoBook = await readTodoBook(bookName)

    res
      .json({
        bookName,
        ...todoBook
      })
      .status(200)
      .end()
  })
)

router.post(
  '/book/todo',
  withAuthentication('todo-list', async (req, res, next, scope) => {
    const { title, position } = req.body || {}
    const bookName = getBookName(scope)

    const todoBook = await addTodo(bookName, title, position)

    res
      .json({
        bookName,
        ...todoBook
      })
      .status(200)
      .end()
  })
)

router.delete(
  '/book/todo',
  withAuthentication('todo-list', async (req, res, next, scope) => {
    const { id } = req.body || {}
    const bookName = getBookName(scope)

    const todoBook = await removeTodo(bookName, id)

    res
      .json({
        bookName,
        ...todoBook
      })
      .status(200)
      .end()
  })
)

router.put(
  '/book/todo',
  withAuthentication('todo-list', async (req, res, next, scope) => {
    const { id, title, checked, position } = req.body || {}
    const bookName = getBookName(scope)

    const todoBook = await editTodo(bookName, id, title, checked, position)

    res
      .json({
        bookName,
        ...todoBook
      })
      .status(200)
      .end()
  })
)

function getBookName(scope: any): string {
  return scope || 'public'
}
