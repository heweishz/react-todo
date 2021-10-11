import React from 'react'
// import '../App.css'
const Form = ({ setTextInput, setTodos, todos, textInput, setStatus }) => {
  const textInputHandle = (e) => {
    setTextInput(e.target.value)
  }
  const addTodosHandle = (e) => {
    e.preventDefault()
    setTodos([
      ...todos,
      {
        text: textInput,
        complete: false,
        id: Math.floor(Math.random() * 1000),
      },
    ])
    setTextInput('')
  }
  const statusHandler = (e) => {
    setStatus(e.target.value)
  }
  return (
    <div>
      <form>
        <input
          value={textInput}
          onChange={textInputHandle}
          type='text'
          className='todo-input'
        />
        <button onClick={addTodosHandle} className='todo-button' type='submit'>
          <i className='fas fa-plus-square'></i>
        </button>
        <div className='select'>
          <select onChange={statusHandler} name='todos' className='filter-todo'>
            <option value='all'>All</option>
            <option value='completed'>Completed</option>
            <option value='uncompleted'>Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  )
}

export default Form
