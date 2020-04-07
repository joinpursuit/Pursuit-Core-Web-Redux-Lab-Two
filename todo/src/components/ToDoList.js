import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { isComplete } from '../actions/todoAction';

const ToDoList = () => {
    const [completeItem, setCompleteItem] = useState(false)
    const dispatch = useDispatch();

    const todoList = useSelector(state => { 
        return state
       });
    
    const handleComplete = (e) => {
        e.preventDefault()
        debugger
        console.log(completeItem)
        dispatch(isComplete(completeItem))
        setCompleteItem(false)
        console.log(completeItem)
        // return e.target
    }
    
    return <ul>
            {todoList.map((todo, i)=>{
                return <li key={i} onClick={handleComplete}>{todo.todo}</li>
            })}
         </ul>
}

export default ToDoList