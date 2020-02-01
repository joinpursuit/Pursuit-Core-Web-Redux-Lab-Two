import React from 'react';
import { connect } from 'react-redux'
import { toggleTodo } from '../store/actions/todoAction ';

const TodoItem = (props) => {

    let todosArr = props.todoReducer.todos;
    let visFilter = props.todoReducer.visibilityFilter
    let displayArr;


    if (visFilter === 'all') {
        displayArr = todosArr
    } else if (visFilter === 'completed') {
        displayArr = todosArr.filter(el => el.todo.completed === true)
    } else if (visFilter === 'incomplete') {
        displayArr = todosArr.filter(el => el.todo.completed === false)
    }

    return (

        displayArr && displayArr.length
            ? displayArr.map(item => {
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