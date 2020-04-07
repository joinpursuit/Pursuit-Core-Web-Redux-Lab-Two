import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { addToDo } from "../actions/toDoActions";
import { useInputs } from "../utility/customHooks"

const AddToDos = () => {
    const id = useSelector((state)=> state.nextTodoId)
    const newToDo = useInputs("");
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addToDo({
            id,
            body: newToDo.value,
            completed: false
        }));
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