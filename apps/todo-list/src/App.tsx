import React, { useState } from 'react'
import { Theme, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import Header from './components/Header'

const useStyles = makeStyles((theme: Theme) => ({
  //...
}))

function App() {
  const [book, setBook] = useState<Book | null>(null)

  const classes = useStyles()

  return (
    <>
      <Header book={book} refreshing={true} onRefresh={() => {}} />
    </>
  )
}

export default App
