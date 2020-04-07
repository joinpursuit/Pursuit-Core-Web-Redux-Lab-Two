import React, { useState } from 'react';
import { addToDo } from '../actions/toDoAction';
import {useDispatch} from 'react-redux'
let nextId = 3;

const CreateToDo = () => {
    const [toDo, setToDo] = useState("");
    const dispatch = useDispatch(); 

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addToDo({id: nextId++, toDo}))
        setToDo("");
    }

    return( 
        <form onSubmit={handleSubmit}>
            <input value={toDo} placeholder="Todo" onChange={(e) => setToDo(e.target.value)}/>
        </form>
    )

}

export default CreateToDo; 