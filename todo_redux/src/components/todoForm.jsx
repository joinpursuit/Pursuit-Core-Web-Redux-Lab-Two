import React from 'react'

export const TodoForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <input type="text" onChange={props.handleNewTodo} placeholder='Enter a Todo' />
        </form>
    )

}

