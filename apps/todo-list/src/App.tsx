import React, { useState } from 'react'
import { Theme, Typography, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import useBookApi from './utils/use-book-api'

import Header from './components/Header'

const useStyles = makeStyles((theme: Theme) => ({
  //...
}))

function App() {
  const [book, setBook] = useState<Book | null>(null)
  const { status, readBook, addTodo, removeTodo, editTodoTitle, editTodoChecked, editTodoPosition } = useBookApi()

  const classes = useStyles()

  return (
    <>
      <Header book={book} refreshable={!status} onRefresh={() => readBook().then(setBook)} />
      <Box marginTop={10}>
        <pre>{status ? status : book ? JSON.stringify(book, null, 4) : 'Nothing!'}</pre>
      </Box>
    </>
  )
}

export default App
