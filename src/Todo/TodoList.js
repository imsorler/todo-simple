import React from 'react'
import { PropTypes } from 'prop-types'
import TodoItem from './TodoItem'

const styles = {
  ul: {
    listStyle: 'none',
    margin: 0,
    padding: 0
  }
}

function TodoList(props) {
  return (
    <ul style={styles.ul}>
      {
        props.todos.map((todo, index) => {
          return (
            <TodoItem
              todos={todo}
              key={todo.id}
              index={index}
              onChange={props.onToggle}
            />
          ) //todos it's props
        })
      }
    </ul>
  )
}

TodoList.propTypes = {
  todosElements: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.func.isRequired
}

export default TodoList