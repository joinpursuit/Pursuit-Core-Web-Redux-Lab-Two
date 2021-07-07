import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { isComplete } from '../actions/todoAction';

const ToDoList = () => {
    const [completeItem, setCompleteItem] = useState(false)
    const dispatch = useDispatch();

    const todoList = useSelector(state => { 
        // return state
        return Object.values(state);
       });
    
    const handleComplete = (e) => {
        e.preventDefault();
        dispatch(isComplete(Number(e.target.id)));
        setCompleteItem(false);
    }

    return <ul>
            {todoList.map((todo)=>{
                return <li key={todo.id} id={todo.id} onClick={handleComplete}>{todo.todo}</li>
            })}
         </ul>
}

export default ToDoList