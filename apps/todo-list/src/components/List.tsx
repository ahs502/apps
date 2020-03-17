import React from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { Container, Typography, Box } from '@material-ui/core'
import Item from './Item'
import NewItem from './NewItem'

interface Props {
  book: Book | null
  disabled?: boolean
  onAdd?(title: string, append: boolean): Promise<boolean>
  onCheck?(id: number, checked: boolean): void
  onEdit?(id: number, title: string): Promise<boolean>
  onRemove?(id: number): void
}

export default function List({ book, disabled, onAdd, onCheck, onEdit, onRemove }: Props) {
  if (!book) return null

  return (
    <Box marginTop={10}>
      <Container maxWidth="md">
        {book.list.length === 0 ? (
          <Box paddingTop={2} paddingBottom={4}>
            <Typography variant="body1">There is no items in the list!</Typography>
            <Typography variant="subtitle1" color="secondary">
              Start by adding a <strong>new</strong> todo.
            </Typography>
          </Box>
        ) : (
          <>
            <Box marginBottom={2}>
              <NewItem disabled={disabled} onAdd={onAdd && (async title => onAdd(title, false))} />
            </Box>
            {book.list.map((item, index) => (
              <Box marginBottom={2} key={item.id}>
                <Item
                  item={item}
                  index={index}
                  disabled={disabled}
                  onCheck={onCheck && (checked => onCheck(item.id, checked))}
                  onEdit={onEdit && (async title => onEdit(item.id, title))}
                  onRemove={onRemove && (() => onRemove(item.id))}
                />
              </Box>
            ))}
          </>
        )}
        <NewItem
          disabled={disabled}
          onAdd={
            onAdd &&
            (async title => {
              const added = await onAdd(title, true)
              //TODO: Scroll to the end after render completed.
              return added
            })
          }
        />
      </Container>
    </Box>
  )
}
