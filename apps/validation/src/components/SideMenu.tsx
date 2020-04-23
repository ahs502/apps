import React from 'react'
import { Paper, Theme, Box, List, ListItem, Typography } from '@material-ui/core'
import { useTheme } from '@material-ui/styles'

interface Props {
  onClose?(): void
}

export default function SideMenu({ onClose }: Props) {
  const theme = useTheme<Theme>()

  return (
    <Box minWidth={theme.spacing(30)}>
      <Paper square variant="outlined">
        <List>
          <ListItem button>
            <Typography variant="h6">Introduction</Typography>
          </ListItem>
          <ListItem button>
            <Typography variant="h6" color="secondary">
              Tutorial
            </Typography>
          </ListItem>
          <ListItem button>
            <Typography variant="h6">API Documentation</Typography>
          </ListItem>
          <ListItem button>
            <Typography variant="h6">Examples</Typography>
          </ListItem>
        </List>
      </Paper>
    </Box>
  )
}
