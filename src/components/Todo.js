import React from 'react'
import '../App.css'
const Todo = ({ todo, todos, setTodos }) => {
  const deleteHandler = () => {
    setTodos(
      todos.filter((el) => {
        return el.id !== todo.id
      })
    )
  }
  const completeHandler = () => {
    setTodos(
      todos.map((el) => {
        if (el.id === todo.id) return { ...el, complete: !el.complete }
        return el
      })
    )
  }
  return (
    <div className='todo'>
      <li className={`todo-item ${todo.complete ? 'completed' : ''}`}>
        {todo.text}
      </li>
      <button onClick={completeHandler} className='complete-btn'>
        <i className='fas fa-check'></i>
      </button>
      <button onClick={deleteHandler} className='trash-btn'>
        <i className='fas fa-trash'></i>
      </button>
    </div>
  )
}

export default Todo
