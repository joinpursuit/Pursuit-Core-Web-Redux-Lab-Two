import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../Actions/todoActions'

const DisplayTodo = () => {
    const state = useSelector((state) => {
        // debugger
        return state.addTodo})
        // console.log("todos", todos);

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        // debugger
        dispatch(addTodo({
            id: state.nextTodoId,
            text: e.target.children[0].value
        }))

        
    }
    const todoList = state.todos.map((todo, i) => {
        return <li key={i}> {todo} </li>
    })

    return(
        <div>
            <h1>TODO LIST</h1>
            <form onSubmit={handleSubmit}>
                <input placeholder="Add Todo" type="text" />
            </form>
            <ul>
                {todoList}
            </ul>
        </div>
    )

    
}
export default DisplayTodo;