import React from 'react'
import { AppBar, Toolbar, Typography, Box, Theme, Button, IconButton, Hidden } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { Menu as MenuIcon } from '@material-ui/icons'

import { intractPathname } from '../../../core/location'
import Icon from './Icon'

const useStyles = makeStyles((theme: Theme) => ({
  menu: {
    marginRight: theme.spacing(2)
  },
  npmLink: {
    textTransform: 'none',
    flexShrink: 0
  },
  npmLogo: {
    height: theme.spacing(2)
  }
}))

interface Props {
  onSideMenuClick?(): void
}

export default function Header({ onSideMenuClick }: Props) {
  const classes = useStyles()

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Hidden lgUp implementation="css">
          <IconButton className={classes.menu} color="inherit" onClick={onSideMenuClick}>
            <MenuIcon />
          </IconButton>
        </Hidden>
        <Icon />
        <Typography variant="h6" noWrap>
          Validation&nbsp;
          <Hidden xsDown>Documentation</Hidden>
          <Hidden smUp>Docs</Hidden>
        </Typography>
        <Box flexGrow={1} marginRight={2} />
        <Button
          className={classes.npmLink}
          variant="contained"
          color="secondary"
          size="small"
          href="https://www.npmjs.com/package/@ahs502/validation"
          target="_blank"
          title="Visit the package in the NPM website"
        >
          &nbsp;
          <img className={classes.npmLogo} src={intractPathname('/npm-logo.png')} alt="NPM" />
          &nbsp;
          <Hidden smDown implementation="css">
            &nbsp;&nbsp;@ahs502/validation
          </Hidden>
        </Button>
      </Toolbar>
    </AppBar>
  )
}
