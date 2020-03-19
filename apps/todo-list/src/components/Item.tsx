import React, { useState } from 'react'
import { Box, Paper, Typography, Checkbox, IconButton, ClickAwayListener, TextField, Theme } from '@material-ui/core'
import { useTheme } from '@material-ui/styles'
import { Edit as EditIcon, Close as CloseIcon, Check as CheckIcon } from '@material-ui/icons'

import isRtl from '../utils/is-rtl'

interface Props {
  item: Book['list'][number]
  index: number
  dragging?: boolean
  disabled?: boolean
  onCheck?(checked: boolean): void
  onEdit?(title: string): Promise<boolean>
  onRemove?(): void
}

export default function Item({ item, index, dragging, disabled, onCheck, onEdit, onRemove }: Props) {
  const [editMode, setEditMode] = useState(false)
  const [editedTitle, setEditedTitle] = useState('')
  const theme = useTheme<Theme>()

  async function apply() {
    const done = await onEdit?.(editedTitle)
    setEditMode(!done)
  }

  const rtl = isRtl(editedTitle)

  if (editMode)
    return (
      <ClickAwayListener onClickAway={event => setEditMode(false)}>
        <Paper elevation={6}>
          <Box padding={2} display="flex" alignItems="center">
            <Box marginRight={2}>
              <Checkbox color="secondary" checked={!!item.checked} disabled={true} />
            </Box>
            <TextField
              fullWidth
              variant="outlined"
              inputProps={{
                style: {
                  fontSize: theme.spacing(3),
                  height: theme.spacing(2),
                  textAlign: rtl ? 'right' : 'left',
                  direction: rtl ? 'rtl' : 'ltr'
                }
              }}
              disabled={disabled}
              label="Todo Text"
              placeholder="Write the todo text here..."
              value={editedTitle}
              onChange={({ target: { value } }) => setEditedTitle(value)}
              onKeyDown={event => event.keyCode === 13 && apply()}
            />
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
        <Typography
          variant="subtitle1"
          align="center"
          style={{
            flexGrow: 1,
            fontSize: theme.spacing(3),
            lineHeight: `calc(${theme.spacing(6)}px + 5px)`
          }}
        >
          {item.title}
        </Typography>
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
