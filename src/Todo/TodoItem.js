import React from 'react'
import { PropTypes } from 'prop-types'

import s from './TodoItem.module.css'

const styles = {
  li: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '.5rem 1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '.5rem'
  },
  input: {
    marginRight: '1rem'
  }
}

function TodoItem({ todos, index, onChange }) {
  const classes = []

  if (todos.completed) {
    classes.push(s.done)
  }

  return (
    <li style={styles.li}>
      <span className={classes.join(' ')}>
        <input
        type="checkbox"
        checked={todos.completed}
        style={styles.input}
        onChange={() => onChange(todos.id)}
        />
      <strong>{index + 1}</strong>
      &nbsp;
      {todos.title}
      </span>

      <button className={s.rm}>&times;</button>
    </li>
  )
}

TodoItem.propTypes = {
  todos: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired
}

export default TodoItem