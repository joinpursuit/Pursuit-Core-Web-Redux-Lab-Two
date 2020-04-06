import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { markComplete } from "../actions/todoActions";
 
const DisplayTodos = () => {
  const allTodos = useSelector((state) => {
    return Object.values(state.todos)
  })

  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(markComplete(e.currentTarget.value))
  }

  return (
    <ul>
      {allTodos.map((todo) => {
        return todo.completed ?
        <li key={todo.id} value={todo.id} style={{ textDecoration: "line-through" }} onClick={handleClick}>{todo.text}</li> :
        <li key={todo.id} value={todo.id} onClick={handleClick}>{todo.text}</li>
      })}
    </ul>
  )
}

export default DisplayTodos;