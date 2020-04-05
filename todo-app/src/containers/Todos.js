import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTodo, removeTodo, toggleCompleted } from '../actions/todoActions'


const Todos = ({ addTodo, removeTodo, toggleCompleted, todoReducer }) => {
    const [state, setState] = useState('')
    const crossOut = e => e.target.attributes.status.value === 'done' ? e.target.style.textDecoration = '' : e.target.style.textDecoration = 'line-through';

    return (
        <div>
            <h1>Todo</h1>
            <div>
                <input type="text" placeholder="Add a new todo..." onChange={e => setState(e.target.value)} value={state} />
                <button onClick={() => addTodo(state)}>Add Todo</button>
            </div>
            <div onClick={crossOut}>
                {todoReducer.todos.map(todo => {
                    return <li status={todo.completed ? 'done' : 'not done'} key={todo.id} id={todo.id} onClick={() => toggleCompleted(todo.id)}>{todo.text}</li>
                })}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        ...state
    }
}

const mapDispatcherToProps = dispatch => {
    return {
        addTodo: (text) => dispatch(addTodo(text)),
        removeTodo: (id) => dispatch(removeTodo(id)),
        toggleCompleted: (id) => dispatch(toggleCompleted(id))
    }
}

export default connect(mapStateToProps, mapDispatcherToProps)(Todos);
