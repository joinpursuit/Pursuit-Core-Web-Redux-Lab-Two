import React from 'react';
import { useSelector } from 'react-redux'

const ToDoList = () => {
    const todoList = useSelector(state => { 
        return Object.values(state)
       });

    return (
        <ul>
            {todoList.map(todo=>{
                return <li key={todo}>{todo}</li>
            })}
         </ul>)
}

export default ToDoList