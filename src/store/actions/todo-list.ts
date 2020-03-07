import kfs from '../kfs'

const currentVersion = 1

interface Kfs {
  readonly todoBooks: {
    readonly [name: string]: null | {
      readonly version: 1
      readonly timestamp: number
      readonly idBase: number
      readonly list: {
        readonly id: number
        readonly title: string
        readonly checked?: boolean
      }[]
    }
  }
}

type TodoBook = Kfs['todoBooks'][string]
type TodoList = TodoBook['list']
type Todo = TodoList[number]

/**
 * Reads a todo book.
 * @param name Book name
 */
export async function readTodoBook(name: string): Promise<TodoBook> {
  if (!name) throw new Error('Book name is required.')
  const todoBook = await kfs(`todoBooks/${name}`)
  return (
    todoBook || {
      version: currentVersion,
      timestamp: 0,
      idBase: 0,
      list: []
    }
  )
}

/**
 * Writes a todo book.
 * @param name Book name
 * @param todoBook Todo book
 */
export async function writeTodoBook(name: string, todoBook: TodoBook): Promise<void> {
  if (!name) throw new Error('Book name is required.')
  await kfs(`todoBooks/${name}`, todoBook)
}

/**
 * Inserts a new todo to a todo book and returns the new todo book.
 * @param bookName Book name
 * @param title Todo title
 * @param position Todo position, default is the end of the list
 */
export async function addTodo(bookName: string, title: string, position?: number): Promise<TodoBook> {
  const oldTodoBook = await readTodoBook(bookName)
  const newTodo: Todo = {
    id: oldTodoBook.idBase,
    title
  }
  const newTodoBook: TodoBook = {
    version: currentVersion,
    timestamp: Date.now(),
    idBase: oldTodoBook.idBase + 1,
    list: position === undefined ? [...oldTodoBook.list, newTodo] : [...oldTodoBook.list.slice(0, position), newTodo, ...oldTodoBook.list.slice(position)]
  }
  await writeTodoBook(bookName, newTodoBook)
  return newTodoBook
}

/**
 * Removes a todo from a todo book if exists and returns the new todo book.
 * @param bookName Book name
 * @param id Todo ID
 */
export async function removeTodo(bookName: string, id: number): Promise<TodoBook> {
  const oldTodoBook = await readTodoBook(bookName)
  const todoIndex = oldTodoBook.list.findIndex(todo => todo.id === id)
  if (todoIndex < 0) return oldTodoBook
  const newTodoBook: TodoBook = {
    version: currentVersion,
    timestamp: Date.now(),
    idBase: oldTodoBook.idBase,
    list: [...oldTodoBook.list.slice(0, todoIndex), ...oldTodoBook.list.slice(todoIndex + 1)]
  }
  await writeTodoBook(bookName, newTodoBook)
  return newTodoBook
}

/**
 * Updates a todo from a todo book if exists and returns the new todo book.
 * @param bookName Book name
 * @param id Todo ID
 * @param title New todo title, set undefined to not to change
 * @param checked New todo checked, set undefined to not to change
 * @param position New todo position, set undefined to not to change
 */
export async function editTodo(
  bookName: string,
  id: number,
  title: string | undefined,
  checked: boolean | undefined,
  position: number | undefined
): Promise<TodoBook> {
  const oldTodoBook = await readTodoBook(bookName)
  const todoIndex = oldTodoBook.list.findIndex(todo => todo.id === id)
  if (todoIndex < 0) return oldTodoBook
  const oldTodo = oldTodoBook.list[todoIndex]
  const newTodo: Todo = {
    id,
    title: title === undefined ? oldTodo.title : title,
    checked: checked === undefined ? oldTodo.checked : checked
  }
  const newTodoList = [...oldTodoBook.list]
  newTodoList.splice(todoIndex, 1)
  const newPosition = position === undefined ? todoIndex : position
  const newTodoBook: TodoBook = {
    version: currentVersion,
    timestamp: Date.now(),
    idBase: oldTodoBook.idBase,
    list: [...newTodoList.slice(0, newPosition), newTodo, ...newTodoList.slice(newPosition)]
  }
  await writeTodoBook(bookName, newTodoBook)
  return newTodoBook
}
