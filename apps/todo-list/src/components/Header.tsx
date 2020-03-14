import React from 'react'
import { Theme, AppBar, Toolbar, Typography, Box, IconButton, Button } from '@material-ui/core'
import { useTheme } from '@material-ui/styles'
import { Cached as CachedIcon, ExitToApp as ExitIcon } from '@material-ui/icons'

import { logout } from '../utils/auth'

interface Props {
  book: Book | null
  refreshable?: boolean
  onRefresh(): void
}

export default function Header({ book, refreshable, onRefresh }: Props) {
  const theme = useTheme<Theme>()

  return (
    <AppBar position="absolute">
      <Toolbar>
        <IconButton color="inherit" onClick={() => logout()}>
          <ExitIcon />
        </IconButton>
        <Box marginX={2}>
          <Typography variant="h6" noWrap>
            Todo List
          </Typography>
        </Box>
        {book && (
          <Typography variant="subtitle2" noWrap>
            {book.name}
          </Typography>
        )}
        <Box flexGrow={1} />
        <Box flexGrow={0} flexShrink={0} marginLeft={2}>
          <Button variant="outlined" color="inherit" endIcon={<CachedIcon />} disabled={!refreshable} onClick={onRefresh}>
            Refresh&nbsp;&nbsp;
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}