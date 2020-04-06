import React from 'react'
import {useSelector, useDispatch} from 'react-redux'

import {idSequence, addToDo} from '../Actions/todoActions'

import Input from './Input'
import {useInput} from '../Utilities/CustomHookery'


const TodoForm = () => {
    
    const input = useInput("")
    
    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch({
            id: 
        })
        input.clearInput()
    }

    return (
        <form onSubmit={handleSubmit}>
            <Input className="todoItem" type="text" name="todoItem" placeholder="Enter Todo" input={input}/>
            <button type="submit">SUBMIT TODO</button>
        </form>
    )
}

export default TodoForm;


// {
//     id: 1,
//     text: "Buy groceries",
//     completed: boolean
//   }