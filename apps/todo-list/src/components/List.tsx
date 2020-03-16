import React from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { Container, Typography, Box, Button } from '@material-ui/core'
import Item from './Item'

interface Props {
  book: Book | null
  disabled?: boolean
  reset(): void
}

export default function List({ book, disabled, reset }: Props) {
  if (!book) return null

  return (
    <Box marginTop={10}>
      <Container maxWidth="md">
        {book.list.length === 0 ? (
          <>
            <Typography variant="body1">There is no items in the list!</Typography>
            <Typography variant="subtitle1" color="secondary">
              Start by adding a <strong>new</strong> item.
            </Typography>
          </>
        ) : (
          book.list.map((item, index) => <Item key={item.id} item={item} index={index} disabled={disabled} />)
        )}
        <Box marginBottom={4}>
          <Button
            fullWidth
            variant="outlined"
            onClick={() => {
              book.list.push({
                id: Date.now(),
                title: new Date().toJSON(),
                checked: Math.random() > 0.5
              })
              reset()
            }}
          >
            Add new item
          </Button>
        </Box>
      </Container>
    </Box>
  )
}
