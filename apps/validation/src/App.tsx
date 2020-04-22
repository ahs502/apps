import React from 'react'
import { AppBar, Toolbar, Typography, Container, Box } from '@material-ui/core'

export default function App() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Validation Docs</Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg">
        <Box padding={5} textAlign="center">
          <img src="under-construction.png" alt="Website is under construction." />
        </Box>
      </Container>
    </>
  )
}
