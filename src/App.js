import './App.css'
import React, { useState, useEffect } from 'react'
import Form from './components/Form'
import TodoLists from './components/TodoList'
function App() {
  const [textInput, setTextInput] = useState('')
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState('all')
  const [filterTodos, setFilterTodos] = useState(todos)

  useEffect(() => {
    getLocalTodos()
  }, [])
  useEffect(() => {
    filterHander()
    saveLocalTodos()
  }, [todos, status])

  function filterHander() {
    switch (status) {
      case 'all':
        setFilterTodos(todos)
        break
      case 'completed':
        setFilterTodos(
          todos.filter((el) => {
            return el.complete === true
          })
        )
        break
      case 'uncompleted':
        setFilterTodos(
          todos.filter((el) => {
            return el.complete === false
          })
        )
        break
    }
  }
  function saveLocalTodos() {
    localStorage.setItem('todos', JSON.stringify(todos))
  }
  function getLocalTodos() {
    if (localStorage.getItem('todos') == null) {
      localStorage.setItem('todos', JSON.stringify([]))
    } else {
      setTodos(JSON.parse(localStorage.getItem('todos')))
    }
  }
  return (
    <div className='App'>
      <header>
        <h1>React Todo List</h1>
      </header>
      <Form
        setTextInput={setTextInput}
        setTodos={setTodos}
        todos={todos}
        textInput={textInput}
        setStatus={setStatus}
      />
      <TodoLists todos={todos} setTodos={setTodos} filterTodos={filterTodos} />
    </div>
  )
}

export default App
