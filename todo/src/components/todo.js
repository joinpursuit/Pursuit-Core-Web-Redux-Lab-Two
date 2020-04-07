import React, { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { addTodo } from '../actions/TodoActions'

const Todo = () => {
    const todolist = useSelector(store => {
        return store
    })
    const dispatch = useDispatch();
    const [input, setInput] = useState("");
    console.log("todo", todolist)


   const handleSubmit = (e) => {
       e.preventDefault()
       dispatch(addTodo(input));
   }
    return(
    <>
        <div>
        <form onSubmit={handleSubmit}>
            <input placeholder="Todo" type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
            <button >Add todo</button>
        </form>
        

        </div>
    </>

    )
}

export default Todo; 