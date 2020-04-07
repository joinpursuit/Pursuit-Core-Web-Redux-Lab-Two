import React from "react";
import  { useSelector, useDispatch  } from 'react-redux'

const TodoList = () => {
    const todos = useSelector(state => state);
    const dispatch = useDispatch();
    
    const handleClick =(id) =>{
        debugger
    }

     return(
         <div>
        <ul>
            {todos.map((todo, i) => {
                return <li 
                 onClick={()=>handleClick(i)} key={i}>{todo.todo}
                style={{textDecoration: todo.completed ? 'line-through' : 'none'}}
               </li>
            })}
        </ul>

         </div>
     )
    
}

export default TodoList;
