import { useState } from 'react'

import { apiRequest } from '../../../core/api-request'

type Status = 'reading book' | 'adding todo' | 'removing todo' | 'editing todo'

export default function useBookApi() {
  const [status, setStatus] = useState<Status | null>(null)

  return {
    status,
    readBook,
    addTodo,
    removeTodo,
    editTodoTitle,
    editTodoChecked,
    editTodoPosition
  }

  async function readBook(): Promise<Book> {
    return await makeRequest('reading book', apiRequest('GET', `todo-list/book`))
  }
  async function addTodo(bookTimestamp: number, title: string, position?: number): Promise<Book> {
    return await makeRequest('adding todo', apiRequest('POST', `todo-list/book/todo`, { bookTimestamp, title, position }))
  }
  async function removeTodo(bookTimestamp: number, id: number): Promise<Book> {
    return await makeRequest('removing todo', apiRequest('DELETE', `todo-list/book/todo`, { bookTimestamp, id }))
  }
  async function editTodo(
    bookTimestamp: number,
    id: number,
    title: string | undefined,
    checked: boolean | undefined,
    position: number | undefined
  ): Promise<Book> {
    return await makeRequest('editing todo', apiRequest('PUT', `todo-list/book/todo`, { bookTimestamp, id, title, checked, position }))
  }

  async function editTodoTitle(bookTimestamp: number, id: number, title: string) {
    return await editTodo(bookTimestamp, id, title, undefined, undefined)
  }
  async function editTodoChecked(bookTimestamp: number, id: number, checked: boolean) {
    return await editTodo(bookTimestamp, id, undefined, checked, undefined)
  }
  async function editTodoPosition(bookTimestamp: number, id: number, position: number) {
    return await editTodo(bookTimestamp, id, undefined, undefined, position)
  }

  async function makeRequest(status: Status, response: Promise<Book>): Promise<Book> {
    if (!status) throw new Error(`Not possible while ${status}.`)

    setStatus(status)
    try {
      const book: Book = await response
      setStatus(null)
      return book
    } catch (reason) {
      setStatus(null)
      throw reason
    }
  }
}
