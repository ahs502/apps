import React from 'react'
import { AppBar, Toolbar, Typography, Container, Box, Paper } from '@material-ui/core'

export default function App() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Hessamoddin A Shokravi</Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg">
        <Box padding={5} textAlign="center">
          <img src="under-construction.png" alt="Website is under construction." />
        </Box>
        <Box marginBottom={2}>
          <a href="/todo-list" target="_blank" rel="noopener noreferrer">
            <Paper>
              <Box padding={2}>
                <Typography variant="subtitle1">Todo List</Typography>
              </Box>
            </Paper>
          </a>
        </Box>
        <Box marginBottom={2}>
          <a href="/validation" target="_blank" rel="noopener noreferrer">
            <Paper>
              <Box padding={2}>
                <Typography variant="subtitle1">Validation Docs</Typography>
              </Box>
            </Paper>
          </a>
        </Box>
      </Container>
    </>
  )
}
