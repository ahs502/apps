import React, { useState, useEffect } from 'react'
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd'
import { Container, Typography, Box, Theme } from '@material-ui/core'
import { useTheme } from '@material-ui/styles'
import Item from './Item'
import NewItem from './NewItem'

interface Props {
  book: Book | null
  disabled?: boolean
  onAdd?(title: string, append: boolean): Promise<boolean>
  onCheck?(id: number, checked: boolean): void
  onEdit?(id: number, title: string): Promise<boolean>
  onRemove?(id: number): void
  onReorder?(id: number, position: number): Promise<boolean>
}

export default function List({ book, disabled, onAdd, onCheck, onEdit, onRemove, onReorder }: Props) {
  const [viewBook, setViewBook] = useState<typeof book>(book)
  useEffect(() => {
    setViewBook(book)
  }, [book])

  const theme = useTheme<Theme>()

  async function handleDragEnd(result: DropResult): Promise<void> {
    if (!result.destination || !book || !onReorder || disabled) return

    const oldIndex = result.source.index
    const newIndex = result.destination.index

    if (oldIndex === newIndex) return

    const itemId = viewBook?.list?.[oldIndex]?.id!

    const newList = [...book.list]
    const item = newList.splice(oldIndex, 1)[0]
    newList.splice(newIndex, 0, item)
    setViewBook({
      ...book,
      list: newList
    })

    const done = await onReorder(itemId, newIndex)

    if (!done) {
      setViewBook(book)
    }
  }

  if (!viewBook) return null

  return (
    <Box marginTop={10} marginBottom={4}>
      <Container maxWidth="md">
        {viewBook.list.length === 0 ? (
          <Box paddingTop={2} paddingBottom={4}>
            <Typography variant="body1">There is no items in the list!</Typography>
            <Typography variant="subtitle1" color="secondary">
              Start by adding a <strong>new todo</strong>.
            </Typography>
          </Box>
        ) : (
          <>
            <Box marginBottom={1.5}>
              <NewItem disabled={disabled} onAdd={onAdd && (async title => onAdd(title, false))} />
            </Box>

            <DragDropContext onDragEnd={handleDragEnd}>
              <Droppable droppableId="list" isDropDisabled={disabled}>
                {(provided, snapshot) => (
                  <div {...provided.droppableProps} ref={provided.innerRef}>
                    {viewBook.list.map((item, index) => (
                      <Draggable key={item.id} draggableId={String(item.id)} index={index} isDragDisabled={disabled}>
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={{
                              marginBottom: theme.spacing(1.5),
                              ...provided.draggableProps.style
                            }}
                          >
                            <Item
                              item={item}
                              index={index}
                              dragging={snapshot.isDragging}
                              disabled={disabled}
                              onCheck={onCheck && (checked => onCheck(item.id, checked))}
                              onEdit={onEdit && (async title => onEdit(item.id, title))}
                              onRemove={onRemove && (() => onRemove(item.id))}
                            />
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
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
