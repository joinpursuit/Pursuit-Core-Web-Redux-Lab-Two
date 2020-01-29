import React from 'react'
import { connect } from 'react-redux'
import { newTodo, addTodo } from '../store/actions/todoAction '

const TodoForm = (props) => {

    return (
        <form onSubmit={e => {
            e.preventDefault()
            props.addTodo()
        }}>
            <input type="text" onChange={props.newTodo} placeholder='Enter a Todo' />
        </form>
    )

}


const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
        newTodo: data => dispatch(newTodo(data)),
        addTodo: data => dispatch(addTodo(data)),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)

