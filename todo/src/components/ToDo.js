import React from 'react'
import { toggleTodo } from '../actions/toDoActions'
import { useSelector, useDispatch } from 'react-redux'

const ToDo = () => {
    const dispatch = useDispatch()

    const items = useSelector(state => {
        return Object.values(state.toDos)
    })
    return (
        <div>
            <ul>
            <h2>TO DO LIST</h2>
            {items.map((item) => {
                return item.completed ? (<li style={{textDecoration: "line-through"}} key={item.id} onClick={() => dispatch(toggleTodo(item.id))}>{item.text}</li>) : (<li  key={item.id} onClick={() => dispatch(toggleTodo(item.id))}>{item.text}</li>)
            })}
            </ul>
        </div>
    )
}

export default ToDo;