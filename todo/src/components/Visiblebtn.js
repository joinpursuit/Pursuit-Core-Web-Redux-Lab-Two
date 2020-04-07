import React from "react";
import { showall, showActive, showCompleted } from '../actions/TodoActions'
import { useDispatch } from 'react-redux';


const VisibleBtn = () => {
    const dispatch = useDispatch();

    const handleAll =() => {
        dispatch(showall())
    }
    const handleActive =() => {
        dispatch(showActive())
    }
    const handleComplete =() => {
        dispatch(showCompleted())
    }

   
    return(
    <>
    <div>
       
        <button onClick={handleAll}>Show all</button>
        <button onClick={handleActive}>Show Active</button>
        <button onClick={handleComplete}>Show Completed</button>
    
    </div>
    </>

    )
}

export default VisibleBtn; 

