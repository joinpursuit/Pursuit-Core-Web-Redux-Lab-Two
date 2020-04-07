import React from 'react';
import { useSelector } from 'react-redux'

const ToDoList = () => {
    const todoList = useSelector(state => { 
        return state
       });

    return <ul>
            {todoList.map((todo, i)=>{
                return <li key={i}>{todo.todo}</li>
            })}
         </ul>
}

export default ToDoList