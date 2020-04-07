import React from 'react';
import { useSelector } from 'react-redux'

const ToDoList = () => {
    const todoList = useSelector(state => { 
        return state
       });
    
    const handleComplete = () => {
        debugger
    }
    
    return <ul>
            {todoList.map((todo, i)=>{
                return <li key={i} onClick={handleComplete}>{todo.todo}</li>
            })}
         </ul>
}

export default ToDoList