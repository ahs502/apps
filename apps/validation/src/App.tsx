import React from 'react'
import { Container, Box } from '@material-ui/core'
import Header from './components/Header'

export default function App() {
  return (
    <>
      <Header />

      <Container maxWidth="lg">
        <Box padding={5} textAlign="center">
          <img src="under-construction.png" alt="Website is under construction." />
        </Box>
      </Container>
    </>
  )
}
