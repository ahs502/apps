import React from 'react'
import { AppBar, Toolbar, Typography, Box, Theme, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme: Theme) => ({
  icon: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    marginRight: theme.spacing(3),
    flexShrink: 0
  },
  npmLink: {
    textTransform: 'none',
    flexShrink: 0
  },
  npmLogo: {
    height: theme.spacing(2),
    marginRight: theme.spacing(1)
  }
}))

export default function Header() {
  const classes = useStyles()

  return (
    <AppBar position="static">
      <Toolbar>
        <img className={classes.icon} src="favicon.png" alt="Validation" />
        <Typography variant="h6" noWrap>
          Validation Documentation
        </Typography>
        <Box flexGrow={1} marginRight={2} />
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
  )
}
