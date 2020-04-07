import React, {useState} from "react"
import {useDispatch} from "react-redux"
import {addToDo} from "../action/toDoListAction"
import AddList from "./AddList"
let nextToDoID = 1

const ToDoList = ()=>{
    const [input, setInput] = useState("")
    const dispatch = useDispatch()

    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(addToDo({
            id: nextToDoID++,
            input

        }))
        setInput("")
    }

    return(
        <div>
            <form onSubmit = {handleSubmit}>
                <h1> To Do List</h1>
                <input type="text" placeHolder = "Place To Do Item" value = {input} onChange = {(e)=>setInput(e.target.value)}/>
                <br/>
                <button>button</button>
            </form>
        <AddList/>
        </div>
    )
}
export default ToDoList