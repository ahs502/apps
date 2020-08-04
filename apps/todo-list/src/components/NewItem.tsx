import React, { useState, useRef } from 'react'
import { Paper, Box, TextField, IconButton, Theme } from '@material-ui/core'
import { useTheme } from '@material-ui/styles'
import { ClearAll as ClearAllIcon, Add as AddIcon, ArrowDropDown as ArrowDropDownIcon } from '@material-ui/icons'

import isRtl from '../utils/is-rtl'

interface Props {
  disabled?: boolean
  onAdd?(title: string): Promise<boolean>
}

export default function NewItem({ disabled, onAdd }: Props) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [title, setTitle] = useState('')
  const theme = useTheme<Theme>()

  async function add() {
    if (!onAdd) return

    const added = await onAdd(title)
    if (added) {
      setTitle('')
      setTimeout(() => inputRef.current?.focus?.()) //TODO: Not working.
    }
  }
  function clear() {
    setTitle('')
    inputRef.current?.focus?.() //TODO: Not working.
  }

  const rtl = isRtl(title)

  return (
    <Paper variant="outlined" square>
      <Box padding={1} display="flex" alignItems="center" style={{ backgroundColor: theme.palette.background.default }}>
        <Box marginRight={1}>
          <IconButton
            disabled={disabled || true}
            title="Select"
            onClick={() => {
              //TODO: Implement suggestions.
            }}
          >
            <ArrowDropDownIcon />
          </IconButton>
        </Box>
        <TextField
          innerRef={inputRef}
          fullWidth
          variant="outlined"
          size="small"
          inputProps={{
            style: {
              fontSize: theme.spacing(2.5),
              height: theme.spacing(2),
              textAlign: rtl ? 'right' : 'left',
              direction: rtl ? 'rtl' : 'ltr'
            }
          }}
          disabled={disabled}
          label="New Todo"
          placeholder="Write the todo text here..."
          value={title}
          onChange={({ target: { value } }) => setTitle(value)}
          onKeyDown={event => event.keyCode === 13 && add()}
        />
        <Box marginLeft={1}>
          <IconButton disabled={disabled || !title} title="Add" onClick={() => add()}>
            <AddIcon />
          </IconButton>
        </Box>
        <IconButton disabled={disabled || !title} title="Clear" onClick={() => clear()}>
          <ClearAllIcon />
        </IconButton>
      </Box>
    </Paper>
  )
}
