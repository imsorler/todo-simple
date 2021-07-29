import React, { useEffect } from 'react'
import TodoList from './Todo/TodoList'
import Context from './context'
import Loader from './Loader'

const AddTodo = React.lazy(() => new Promise(res => {
  setTimeout(() => {
    res(import('./Todo/AddTodo'))
  }, 3000)
}))

function App() {
  const [todosElements, setTodos] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(response => response.json())
      .then(todos => {
        setTimeout(() => {
          setTodos(todos)
          setLoading(false)
        }, 2000)
      })
  }, [])

  function toggleTodo(id) {
    setTodos(
      todosElements.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    )
  }

  function removeTodo(id) {
    setTodos(todosElements.filter(todo => todo.id !== id))
  }

  function addTodo(title) {
    setTodos(todosElements.concat([{
      title,
      id: Date.now(),
      completed: false
    }]))
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
      <h1>Список задач</h1>

      <React.Suspense fallback={<p>Загрузка...</p>}>
        <AddTodo onCreate={addTodo}/>
      </React.Suspense>

      {loading && <Loader />}
      {
        todosElements.length
        ?
          <TodoList
            todos={todosElements}
            onToggle={toggleTodo}
          />
        :
          (loading ? null : <p>У вас нет задач</p>)
      }
      </div>
    </Context.Provider>
  )
}

export default App;
