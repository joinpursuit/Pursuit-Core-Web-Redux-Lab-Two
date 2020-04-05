import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {addToDo} from '../actions/toDoAction.js'

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
<form onSubmit ={handleSubmit}>
<input placeholder = "toDo"
type ="text"
value={input}
onChange={(e)=> setInput(e.target.value)}/>


</form>



    </div>


    </>
)



}
export default toDo