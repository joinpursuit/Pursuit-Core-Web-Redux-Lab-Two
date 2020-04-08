import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo } from '../Actions/TodoAction';
import "../CSS/TodoListItem.css";

const TodoListItem = ({todo}) => {
    const dispatch = useDispatch();
    return(
        <li 
        className={todo.complete ? "complete" : "unfinished" }
        onClick={() => dispatch(toggleTodo(todo.id))}
        >
            {todo.body}
        </li>
    )
}

export default TodoListItem; 
