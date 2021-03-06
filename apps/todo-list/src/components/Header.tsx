import React from 'react'
import { Theme, AppBar, Toolbar, Typography, Box, IconButton, Button } from '@material-ui/core'
import { useTheme } from '@material-ui/styles'
import { Cached as CachedIcon, Close as ExitIcon } from '@material-ui/icons'

import { logout } from '../../../core/auth'

interface Props {
  book: Book | null
  disabled?: boolean
  onRefresh(): void
}

export default function Header({ book, disabled, onRefresh }: Props) {
  const theme = useTheme<Theme>()

  return (
    <AppBar position="absolute">
      <Toolbar>
        <IconButton color="inherit" title="Close this list" disabled={disabled} onClick={() => logout()}>
          <ExitIcon />
        </IconButton>
        <Box marginLeft={1} marginRight={2}>
          <Typography variant="h6" noWrap>
            Todo List
          </Typography>
        </Box>
        {book && (
          <Typography variant="subtitle2" noWrap title="Todo list name">
            {book.name}
          </Typography>
        )}
        <Box flexGrow={1} />
        <Box flexGrow={0} flexShrink={0} marginLeft={2}>
          <Button variant="outlined" color="inherit" endIcon={<CachedIcon />} title="Refresh to the latest list" disabled={disabled} onClick={onRefresh}>
            Refresh&nbsp;&nbsp;
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
