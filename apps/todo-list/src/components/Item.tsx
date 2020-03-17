import React, { useState } from 'react'
import { Box, Paper, Typography, Checkbox, IconButton, ClickAwayListener, TextField } from '@material-ui/core'
import { Edit as EditIcon, Close as CloseIcon, Check as CheckIcon } from '@material-ui/icons'

interface Props {
  item: Book['list'][number]
  index: number
  disabled?: boolean
  onCheck?(checked: boolean): void
  onEdit?(title: string): Promise<boolean>
  onRemove?(): void
}

export default function Item({ item, index, disabled, onCheck, onEdit, onRemove }: Props) {
  const [editMode, setEditMode] = useState(false)
  const [editedTitle, setEditedTitle] = useState('')

  async function apply() {
    const done = await onEdit?.(editedTitle)
    setEditMode(!done)
  }

  if (editMode)
    return (
      <ClickAwayListener onClickAway={event => setEditMode(false)}>
        <Paper elevation={6}>
          <Box padding={2} display="flex" alignItems="center">
            <Box marginRight={7} />
            <TextField
              fullWidth
              disabled={disabled}
              label="Todo Text"
              placeholder="Write the todo text here..."
              value={editedTitle}
              onChange={({ target: { value } }) => setEditedTitle(value)}
              onKeyDown={event => event.keyCode === 13 && apply()}
            />
            <Box flexGrow={1} />
            <Box marginRight={1} marginLeft={2}>
              <IconButton disabled={disabled} title="Apply" onClick={() => apply()}>
                <CheckIcon />
              </IconButton>
            </Box>
            <IconButton disabled={disabled} title="Cancel" onClick={() => setEditMode(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
        </Paper>
      </ClickAwayListener>
    )

  return (
    <Paper elevation={2}>
      <Box padding={2} display="flex" alignItems="center">
        <Box marginRight={2}>
          <Checkbox color="secondary" checked={!!item.checked} disabled={disabled} onChange={(event, checked) => onCheck?.(checked)} />
        </Box>
        <Typography variant="subtitle1">{item.title}</Typography>
        <Box flexGrow={1} />
        <Box marginRight={1} marginLeft={2}>
          <IconButton
            disabled={disabled}
            title="Edit"
            onClick={() => {
              setEditedTitle(item.title)
              setEditMode(true)
            }}
          >
            <EditIcon />
          </IconButton>
        </Box>
        <IconButton disabled={disabled} title="Remove" onClick={() => onRemove?.()}>
          <CloseIcon />
        </IconButton>
      </Box>
    </Paper>
  )
}
