import React from 'react';
import { connect } from 'react-redux'
import { toggleTodo } from '../store/actions/todoAction ';

const TodoItem = (props) => {

    let todosArr = props.todoReducer.todos;
    let displayArr;

    switch (props.todoReducer.visibilityFilter) {
        case 'all':
            displayArr = todosArr
            break;
        case 'completed':
            displayArr = todosArr.filter(el => el.todo.completed === true)
            break;
        case 'incomplete':
            displayArr = todosArr.filter(el => el.todo.completed === false)
            break;
        default:
            break;
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