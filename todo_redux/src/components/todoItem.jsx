import React from 'react';
import { toast } from 'react-toastify';
import { connect } from 'react-redux'
import { toggleTodo } from '../store/actions/todoAction ';
import './todo.css'

const TodoItem = (props) => {

    let todosArr = props.todoReducer.todos

    return (

        todosArr && todosArr.length
            ? todosArr.map(item => {
                return (
                    <li onClick={() => props.toggleTodo(item.todo.id)}
                        style={{
                            textDecoration: item.todo.completed ? 'line-through' : 'none',

                        }}

                        key={item.todo.id}
                    >
                        {item.todo.text}
                    </li >
                )
            })
            : null
    )
}

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleTodo: data => dispatch(toggleTodo(data)),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);