import kfs from '../kfs'

const currentVersion = 1

interface Kfs {
  readonly todoList: {
    readonly [book: string]: null | {
      readonly version: number
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

type TodoList = Kfs['todoList'][string]
type Todo = TodoList['list'][number]

/**
 * Reads a todo list from a book.
 * @param book Book name, default value is `'public'`
 */
export async function readTodoList(book: string): Promise<TodoList> {
  const todoList = await kfs(`todoList/${book || 'public'}`)
  return (
    todoList || {
      version: currentVersion,
      timestamp: 0,
      idBase: 0,
      list: []
    }
  )
}

/**
 * Writes a todo list into a book.
 * @param book Book name, default value is `'public'`
 * @param todoList Todo list
 */
export async function writeTodoList(book: string, todoList: TodoList): Promise<void> {
  await kfs(`todoList/${book || 'public'}`, todoList)
}

/**
 * Inserts a new todo to a todo list from a book and returns the new todo list.
 * @param book Book name, default value is `'public'`
 * @param title Todo title
 * @param position Todo position, default is the end of the list
 */
export async function insertTodo(book: string, title: string, position?: number): Promise<TodoList> {
  const oldTodoList = await readTodoList(book)
  const newTodo: Todo = {
    id: oldTodoList.idBase,
    title
  }
  const newTodoList: TodoList = {
    version: currentVersion,
    timestamp: Date.now(),
    idBase: oldTodoList.idBase + 1,
    list: position === undefined ? [...oldTodoList.list, newTodo] : [...oldTodoList.list.slice(0, position), newTodo, ...oldTodoList.list.slice(position)]
  }
  await writeTodoList(book, newTodoList)
  return newTodoList
}

/**
 * Removes a todo from a todo list from a book if exists and returns the new todo list.
 * @param book Book name, default value is `'public'`
 * @param id Todo ID
 */
export async function removeTodo(book: string, id: number): Promise<TodoList> {
  const oldTodoList = await readTodoList(book)
  const todoIndex = oldTodoList.list.findIndex(todo => todo.id === id)
  if (todoIndex < 0) return oldTodoList
  const newTodoList: TodoList = {
    version: currentVersion,
    timestamp: Date.now(),
    idBase: oldTodoList.idBase,
    list: [...oldTodoList.list.slice(0, todoIndex), ...oldTodoList.list.slice(todoIndex + 1)]
  }
  await writeTodoList(book, newTodoList)
  return newTodoList
}

/**
 * Updates a todo from a todo list from a book if exists and returns the new todo list.
 * @param book Book name, default value is `'public'`
 * @param id Todo ID
 * @param title New todo title, set undefined to not to update
 * @param checked New todo checked, set undefined to not to update
 * @param position New todo position, set undefined to not to update
 */
export async function updateTodo(
  book: string,
  id: number,
  title: string | undefined,
  checked: boolean | undefined,
  position: number | undefined
): Promise<TodoList> {
  const oldTodoList = await readTodoList(book)
  const todoIndex = oldTodoList.list.findIndex(todo => todo.id === id)
  if (todoIndex < 0) return oldTodoList
  const oldTodo = oldTodoList.list[todoIndex]
  const newTodo: Todo = {
    id,
    title: title === undefined ? oldTodo.title : title,
    checked: checked === undefined ? oldTodo.checked : checked
  }
  const newList = [...oldTodoList.list]
  newList.splice(todoIndex, 1)
  const newPosition = position === undefined ? todoIndex : position
  const newTodoList: TodoList = {
    version: currentVersion,
    timestamp: Date.now(),
    idBase: oldTodoList.idBase,
    list: [...newList.slice(0, newPosition), newTodo, ...newList.slice(newPosition)]
  }
  await writeTodoList(book, newTodoList)
  return newTodoList
}
