import React from 'react'
import { AppBar, Toolbar, Typography, Container, Box, Theme, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme: Theme) => ({
  icon: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    marginRight: theme.spacing(3)
  },
  npmLink: {
    textTransform: 'none'
  },
  npmLogo: {
    height: theme.spacing(2),
    marginRight: theme.spacing(1)
  }
}))

export default function App() {
  const classes = useStyles()

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <img className={classes.icon} src="favicon.png" alt="Validation" />
          <Typography variant="h6">Validation Documentation</Typography>
          <Box flexGrow={1} />
          <Button
            className={classes.npmLink}
            variant="contained"
            color="secondary"
            size="small"
            href="https://www.npmjs.com/package/@ahs502/validation"
            target="_blank"
          >
            <img className={classes.npmLogo} src="npm-logo.png" alt="NPM" />
            @ahs502/validation
          </Button>
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
