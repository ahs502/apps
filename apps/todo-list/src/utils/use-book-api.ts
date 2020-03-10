import { useState } from 'react'
import { authenticationHeader, authenticationJsonContentHeaders } from './headers'

export default function useBookApi() {
  const [status, setStatus] = useState<null | 'reading book' | 'adding todo' | 'removing todo' | 'editing todo'>(null)

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
    return await makeRequest(
      fetch(`/api/todo-list/book`, {
        headers: authenticationHeader
      })
    )
  }
  async function addTodo(title: string, position?: number): Promise<Book> {
    return await makeRequest(
      fetch(`/api/todo-list/book/todo`, {
        headers: authenticationJsonContentHeaders,
        method: 'POST',
        body: JSON.stringify({ title, position })
      })
    )
  }
  async function removeTodo(id: number): Promise<Book> {
    return await makeRequest(
      fetch(`/api/todo-list/book/todo`, {
        headers: authenticationJsonContentHeaders,
        method: 'DELETE',
        body: JSON.stringify({ id })
      })
    )
  }
  async function editTodo(id: number, title: string | undefined, checked: boolean | undefined, position: number | undefined): Promise<Book> {
    return await makeRequest(
      fetch(`/api/todo-list/book/todo`, {
        headers: authenticationJsonContentHeaders,
        method: 'PUT',
        body: JSON.stringify({ id, title, checked, position })
      })
    )
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

  function checkStatus() {
    if (!status) throw new Error(`Not possible while ${status}.`)
  }
  async function makeRequest(response: Promise<Response>): Promise<Book> {
    checkStatus()
    setStatus('adding todo')
    try {
      let book: Book = await (await response).json()
      setStatus(null)
      return book
    } catch (reason) {
      setStatus(null)
      throw reason
    }
  }
}
