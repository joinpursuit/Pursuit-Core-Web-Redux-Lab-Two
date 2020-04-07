import React from "react"
import {useSelector} from "react-redux"

const AddList=()=>{
    const lists= useSelector((state)=>{ 
        
        return state
    })
    
    const handleComplete = (e)=>{
        console.log(e.target.value)
        debugger
        debugger
    }
    
    return(
        <ul>
        {lists.map((list, i )=>{
            return <li key={i} onClick = {handleComplete}>{list.input}</li>
        })}
        </ul>
    ) 
}
export default AddList