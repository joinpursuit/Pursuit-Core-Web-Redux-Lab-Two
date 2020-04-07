import React from "react";
import  { useSelector, useDispatch  } from 'react-redux'
import { toggleTodo } from '../actions/TodoActions'

const TodoList = () => {
    const todos = useSelector(state => state);
    const dispatch = useDispatch();
    
    const handleClick =(id) =>{
        debugger
        dispatch(toggleTodo(id))
    }

     return(
         <div>
        <ul>
            {todos.map((todo, i) => {
                
                return <li 
                 style={{textDecoration: todo.completed ? 'line-through' : 'none'}}
                 onClick={()=>handleClick(todo.id)} key={i}>{todo.todo}
               </li>
            })}
        </ul>

         </div>
     )
    
}

export default TodoList;
