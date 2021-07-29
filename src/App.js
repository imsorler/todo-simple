import React from 'react'
import TodoList from './Todo/TodoList'

function App() {
  let [todosElements, setTodos] = React.useState([
    {id: 1, completed: false, title: 'Купить хлеб'},
    {id: 2, completed: true, title: 'Купить масло'},
    {id: 3, completed: false, title: 'Купить молоко'},
  ])

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

  return (
    <div className="wrapper">
      <h1>Список задач</h1>
      <TodoList todos={todosElements} onToggle={toggleTodo}/>
    </div>
  )
}

export default App;
