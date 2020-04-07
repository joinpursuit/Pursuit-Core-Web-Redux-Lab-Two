import React, { useState } from 'react'
import { addItem } from '../actions/toDoActions'
import { useDispatch } from 'react-redux'
let itemId = 1

const CreateItem = () => {
    const dispatch = useDispatch()
    const [item, setItem] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        let newTodo = {id: itemId++,
            text: item,
            completed: false
        }
            console.log(newTodo)
        dispatch(addItem(newTodo))

        setItem("")
    }
    return (
        <form onSubmit={handleSubmit}>
            <input value={item} placeholder="New To-Do Item?" onChange={(e) => setItem(e.target.value)}/>
        </form>
    )
}

export default CreateItem;