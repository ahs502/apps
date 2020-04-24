import React from 'react'
import { Toolbar, Typography, IconButton, Box, Hidden } from '@material-ui/core'
import { Close as CloseIcon } from '@material-ui/icons'

import Icon from './Icon'

interface Props {
  onClose?(): void
}

export default function MiniHeader({ onClose }: Props) {
  return (
    <Toolbar>
      <Box marginRight={2}>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Icon />
      <Typography variant="h6" noWrap>
        Validation&nbsp;
        <Hidden xsDown>Documentation</Hidden>
        <Hidden smUp>Docs</Hidden>
      </Typography>
    </Toolbar>
  )
}
