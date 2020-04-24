import React from 'react'
import { Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme: Theme) => ({
  icon: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    marginRight: theme.spacing(3),
    flexShrink: 0
  }
}))

export default function Icon() {
  const classes = useStyles()

  return <img className={classes.icon} src="/favicon.png" alt="Validation" />
}
