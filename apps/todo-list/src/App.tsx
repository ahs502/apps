import React, { useState, useEffect } from 'react'
import { Theme, Typography, Box, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import useBookApi from './utils/use-book-api'

import Header from './components/Header'
import usePromiseHandler from './utils/use-promise-handler'
import List from './components/List'

const useStyles = makeStyles((theme: Theme) => ({
  //...
}))

function App() {
  const [book, setBook] = useState<Book | null>(null)
  const { status, readBook, addTodo, removeTodo, editTodoTitle, editTodoChecked, editTodoPosition } = useBookApi()
  const { handlePromise, errorSnackbar } = usePromiseHandler()

  const disabled = !!status
  const bookTimestamp = book ? book.timestamp : 0

  async function refresh() {
    const response = await handlePromise(readBook)
    response.success && setBook(response.result)
  }
  async function add(title: string, append: boolean): Promise<boolean> {
    const position = append ? undefined : 0
    const response = await handlePromise(() => addTodo(bookTimestamp, title, position))
    response.success && setBook(response.result)
    return response.success
  }
  async function check(id: number, checked: boolean) {
    const response = await handlePromise(() => editTodoChecked(bookTimestamp, id, checked))
    response.success && setBook(response.result)
  }
  async function edit(id: number, title: string): Promise<boolean> {
    const response = await handlePromise(() => editTodoTitle(bookTimestamp, id, title))
    response.success && setBook(response.result)
    return response.success
  }
  async function remove(id: number) {
    const response = await handlePromise(() => removeTodo(bookTimestamp, id))
    response.success && setBook(response.result)
  }

  useEffect(() => {
    refresh()
  }, [])

  const classes = useStyles()

  return (
    <>
      <Header book={book} disabled={disabled} onRefresh={refresh} />
      <List book={book} disabled={disabled} onAdd={add} onCheck={check} onEdit={edit} onRemove={remove} />
      {errorSnackbar}
    </>
  )
}

export default App
