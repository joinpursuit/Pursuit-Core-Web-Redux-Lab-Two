import React from 'react'
import { useSelector } from 'react-redux'
const ToDo = () => {
    const items = useSelector(state => {
        debugger
        return Object.values(state.toDos)
    })
    return (
        <div>
            <ul>
            <h2>TO DO LIST</h2>
            {items.map((item) => {
                return <li key={item.id}>{item.text}</li>
            })}
            </ul>
        </div>
    )
}

export default ToDo;