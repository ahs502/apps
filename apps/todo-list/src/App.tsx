import React, { useState, useEffect } from 'react'
import { Theme, Typography, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import useBookApi from './utils/use-book-api'

import Header from './components/Header'
import usePromiseHandler from './utils/use-promise-handler'

const useStyles = makeStyles((theme: Theme) => ({
  //...
}))

function App() {
  const [book, setBook] = useState<Book | null>(null)
  const { status, readBook, addTodo, removeTodo, editTodoTitle, editTodoChecked, editTodoPosition } = useBookApi()
  const { handlePromise, errorSnackbar } = usePromiseHandler()

  async function refresh() {
    const newBook = await handlePromise(readBook, book)
    setBook(newBook)
  }

  useEffect(() => {
    refresh()
  }, [])

  const classes = useStyles()

  return (
    <>
      <Header book={book} refreshable={!status} onRefresh={refresh} />
      <Box marginTop={10}>
        <pre>{status ? status : book ? JSON.stringify(book, null, 4) : 'Nothing!'}</pre>
      </Box>
      {errorSnackbar}
    </>
  )
}

export default App
