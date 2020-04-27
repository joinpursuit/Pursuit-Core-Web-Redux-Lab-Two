import React from "react";
import { useSelector } from "react-redux";
import Todolist from "./Todolist"

const DisplayTodos = () => {
  let allTodos = useSelector((state) => {
    return Object.values(state.todos);
  })
  const filterState = useSelector((state) => {
    return state.filter;
  });

  if (filterState === "Complete") {
    allTodos = allTodos.filter((todo) => todo.completed);
    return (<Todolist allTodos={allTodos}/>)
  } else if (filterState === "Active") {
    allTodos = allTodos.filter((todo) => !todo.completed)
    return (<Todolist allTodos={allTodos}/>)
  } else {
    return (<Todolist allTodos={allTodos}/>)
  }


};
export default DisplayTodos;
