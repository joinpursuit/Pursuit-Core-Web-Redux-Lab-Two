import React, { useState } from 'react';
import { connect } from 'react-redux'
import Todo from './Todo'

function App(props) {
  const [ todoInput, setTodoInput ] = useState('')

  const inputHandler = (event) => {
    setTodoInput(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault()
    let newTodo = {
      id: props.nextTodoId,
      text: todoInput,
      completed: false,
      style: {textDecoration: 'none'}
    }
    props.todos.push(newTodo)
    props.addTodo(props.todos)
    setTodoInput('')
  }

  const allBtnHandler = () => {
    props.setVisibilityFilter('all')
  }

  const activeBtnHandler = () => {
    props.setVisibilityFilter('active')
  }

  const completedBtnHandler = () => {
    props.setVisibilityFilter('completed')
  }

  let todos = []
  if (props.visibilityFilter === 'all') {
    todos = props.todos
  } else if (props.visibilityFilter === 'completed') {
    todos = props.todos.filter(todo => todo.completed === true)
  } else if (props.visibilityFilter === 'active') {
    todos = props.todos.filter(todo => todo.completed === false)
  }

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input type='text' value={todoInput} onChange={inputHandler}></input>
        <button>Add Todo</button>
      </form>
      <ul>
        {todos.map(el => {
            return (
              <li key={el.id}>
              <Todo id={el.id}/>
              </li>
            )
        })}
      </ul>
      <p>Show:</p>
      <button onClick={allBtnHandler}>All</button>
      <button onClick={activeBtnHandler}>Active</button>
      <button onClick={completedBtnHandler}>Completed</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: data => {
      dispatch({
        type: 'ADD_TODO',
        payload: data
      })
    },
    setVisibilityFilter: data => {
      dispatch({
        type: 'SET_VISIBILITY_FILTER',
        payload: data
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
