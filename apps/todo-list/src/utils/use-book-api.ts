import { useState } from 'react'

import { apiFetch } from '../../../core/api-fetch'

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
    return await makeRequest('reading book', apiFetch('GET', `todo-list/book`))
  }
  async function addTodo(title: string, position?: number): Promise<Book> {
    return await makeRequest('adding todo', apiFetch('POST', `todo-list/book/todo`, { title, position }))
  }
  async function removeTodo(id: number): Promise<Book> {
    return await makeRequest('removing todo', apiFetch('DELETE', `todo-list/book/todo`, { id }))
  }
  async function editTodo(id: number, title: string | undefined, checked: boolean | undefined, position: number | undefined): Promise<Book> {
    return await makeRequest('editing todo', apiFetch('PUT', `todo-list/book/todo`, { id, title, checked, position }))
  }

  async function editTodoTitle(id: number, title: string) {
    return await editTodo(id, title, undefined, undefined)
  }
  async function editTodoChecked(id: number, checked: boolean) {
    return await editTodo(id, undefined, checked, undefined)
  }
  async function editTodoPosition(id: number, position: number) {
    return await editTodo(id, undefined, undefined, position)
  }

  async function makeRequest(status: Status, request: Promise<Response>): Promise<Book> {
    if (!status) throw new Error(`Not possible while ${status}.`)

    setStatus(status)
    try {
      const response = await request
      const book: Book = await response.json()
      setStatus(null)
      return book
    } catch (reason) {
      setStatus(null)
      throw reason
    }
  }
}
