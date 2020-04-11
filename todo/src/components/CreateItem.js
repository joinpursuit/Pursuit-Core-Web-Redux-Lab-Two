import React, { useState } from 'react'
import {createTodo } from '../actions/toDoActions'
import { useDispatch, useSelector } from 'react-redux'

const CreateItem = () => {
    const id = useSelector(state => state.nextId)
    const dispatch = useDispatch()
    const [item, setItem] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        let newTodo = {id: id,
            text: item,
            completed: false
        }
            console.log(newTodo)
        dispatch(createTodo(newTodo))
        setItem("")
    }
    return (
        <form onSubmit={handleSubmit}>
            <input value={item} placeholder="New To-Do Item?" onChange={(e) => setItem(e.target.value)}/>
        </form>
    )
}

export default CreateItem;