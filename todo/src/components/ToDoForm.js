import React, { useState } from 'react';
import { addItem } from '../actions/todoAction';
import { useDispatch } from 'react-redux';


const ToDoForm = () => {
    const [todo, setTodo] = useState("");

    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addItem(todo))
        setTodo("");
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input value={todo} placeholder="Enter Item" onChange={(e) => setTodo(e.target.value)}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ToDoForm