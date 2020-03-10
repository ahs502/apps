import React from 'react'
import { Theme, AppBar, Toolbar, Typography, Box, IconButton, Button } from '@material-ui/core'
import { useTheme } from '@material-ui/styles'
import { Cached as CachedIcon } from '@material-ui/icons'

interface Props {
  book: Book | null
  refreshing?: boolean
  onRefresh(): void
}

export default function Header({ book, refreshing, onRefresh }: Props) {
  const theme = useTheme<Theme>()

  return (
    <AppBar position="absolute">
      <Toolbar>
        <Typography variant="h6">Todo List</Typography>
        {book && (
          <Box marginLeft={2}>
            <Typography variant="subtitle2">{book.name}</Typography>
          </Box>
        )}
        <Box flexGrow={1} />
        <Button variant="outlined" color="inherit" size="large" endIcon={<CachedIcon color="inherit" />} disabled={refreshing} onClick={onRefresh}>
          Refresh&nbsp;&nbsp;
        </Button>
      </Toolbar>
    </AppBar>
  )
}
