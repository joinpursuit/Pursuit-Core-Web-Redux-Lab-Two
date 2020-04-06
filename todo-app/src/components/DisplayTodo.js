import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { markComplete } from "../actions/todoActions";
 
const DisplayTodos = () => {
  const allTodos = useSelector((state) => {
    return Object.values(state.todos)
  })
  return (
    <ul>
      {allTodos.map((todo) => {
        return <li key={todo.id}>{todo.text}</li>
      })}
    </ul>
  )
}

export default DisplayTodos;