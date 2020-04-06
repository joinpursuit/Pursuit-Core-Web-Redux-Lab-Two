import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {addToDo, clearToDo} from '../actions/toDoAction.js'

const toDo = ()=>{
const [input, setInput] = useState("")
const dispatch = useDispatch()


const handleSubmit=(e)=>{
e.preventDefault()
dispatch(addToDo(input))
}
return (
    <>
    <div>
add a To do

<input placeholder = "toDo"
type ="text"
value={input}
onChange={(e)=> setInput(e.target.value)}/>


<button onClick={() => addTodo(state)}>Add Todo</button>
<button onClick={() => clearToDo(id)}>clearToDo  Todo</button>

    </div>


    </>
)



}
export default toDo