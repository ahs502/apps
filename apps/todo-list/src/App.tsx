import React, { useState, useEffect } from 'react'
import { Theme, Typography, Box } from '@material-ui/core'
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

  console.log('book =', book) //TODO: Remove this line later.

  async function refresh() {
    const newBook = await handlePromise(readBook, book)
    setBook(book || newBook)
  }

  useEffect(() => {
    refresh()
  }, [])

  const classes = useStyles()

  return (
    <>
      <Header book={book} disabled={disabled} onRefresh={refresh} />
      <List book={book} disabled={disabled} reset={() => book && setBook({ ...book })} />
      {errorSnackbar}
    </>
  )
}

export default App
