import React from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "../actions/addToDoActions";
import { useInputs } from "../utility/customHooks"

const AddToDos = () => {
    const newToDo = useInputs("");
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addToDo(newToDo.value))
        newToDo.value = "";
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Add A New To Do" {...newToDo}/>
                <button>Submit</button>
            </form>
            
        </div>
    )
}

export default AddToDos;