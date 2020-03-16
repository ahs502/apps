import React from 'react'
import { Box, Paper, Typography } from '@material-ui/core'

interface Props {
  item: Book['list'][number]
  index: number
  disabled?: boolean
}

export default function Item({ item, index, disabled }: Props) {
  return (
    <Box marginBottom={2}>
      <Paper>
        <Typography variant="subtitle2">
          {item.checked ? '[X]' : '[ ]'} {item.title}
        </Typography>
        {!disabled && <button>Action</button>}
      </Paper>
    </Box>
  )
}
