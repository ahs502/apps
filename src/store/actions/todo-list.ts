import kfs, { Store } from '../kfs'

const currentVersion = 1

type Book = Store['books'][string]
type TodoList = Book['list']
type Todo = TodoList[number]

/* prettier-ignore */ ''; // In order to prevent syntax highlighter from messing up!

/**
 * Reads a todo book.
 * @param bookName Book name
 */
export async function readTodoBook(bookName: string): Promise<Book> {
  if (!bookName) throw new Error('Book name is required.')
  const book = await kfs(`books/${bookName}`)
  return (
    book || {
      version: currentVersion,
      timestamp: 0,
      idBase: 0,
      list: []
    }
  )
}

/**
 * Writes a todo book.
 * @param bookName Book name
 * @param book Todo book
 */
export async function writeTodoBook(bookName: string, book: Book): Promise<void> {
  if (!bookName) throw new Error('Book name is required.')
  await kfs(`books/${bookName}`, book)
}

/**
 * Inserts a new todo to a todo book and returns the new todo book.
 * @param bookName Book name
 * @param title Todo title
 * @param position Todo position, default is the end of the list
 */
export async function addTodo(bookName: string, title: string, position?: number): Promise<Book> {
  const oldBook = await readTodoBook(bookName)
  const newTodo: Todo = {
    id: oldBook.idBase,
    title
  }
  const newBook: Book = {
    version: currentVersion,
    timestamp: Date.now(),
    idBase: oldBook.idBase + 1,
    list: position === undefined ? [...oldBook.list, newTodo] : [...oldBook.list.slice(0, position), newTodo, ...oldBook.list.slice(position)]
  }
  await writeTodoBook(bookName, newBook)
  return newBook
}

/**
 * Removes a todo from a todo book if exists and returns the new todo book.
 * @param bookName Book name
 * @param id Todo ID
 */
export async function removeTodo(bookName: string, id: number): Promise<Book> {
  const oldBook = await readTodoBook(bookName)
  const todoIndex = oldBook.list.findIndex(todo => todo.id === id)
  if (todoIndex < 0) return oldBook
  const newBook: Book = {
    version: currentVersion,
    timestamp: Date.now(),
    idBase: oldBook.idBase,
    list: [...oldBook.list.slice(0, todoIndex), ...oldBook.list.slice(todoIndex + 1)]
  }
  await writeTodoBook(bookName, newBook)
  return newBook
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
): Promise<Book> {
  const oldBook = await readTodoBook(bookName)
  const todoIndex = oldBook.list.findIndex(todo => todo.id === id)
  if (todoIndex < 0) return oldBook
  const oldTodo = oldBook.list[todoIndex]
  const newTodo: Todo = {
    id,
    title: title === undefined ? oldTodo.title : title,
    checked: checked === undefined ? oldTodo.checked : checked
  }
  const newTodoList = [...oldBook.list]
  newTodoList.splice(todoIndex, 1)
  const newPosition = position === undefined ? todoIndex : position
  const newBook: Book = {
    version: currentVersion,
    timestamp: Date.now(),
    idBase: oldBook.idBase,
    list: [...newTodoList.slice(0, newPosition), newTodo, ...newTodoList.slice(newPosition)]
  }
  await writeTodoBook(bookName, newBook)
  return newBook
}
