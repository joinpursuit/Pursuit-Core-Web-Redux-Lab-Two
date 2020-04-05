import React from "react";
import { useSelector } from "react-redux";

const DisplayTodos = () => {
  const todoList = useSelector((state) => Object.values(state.toDos));


  
  let displayList = todoList.map((todo) => {
    return (
        { todo.completed ? (<li key={todo.id}>{todo.text}</li>) : (null) }
    )
  });

  return (
    <ul>{displayList}</ul>
  )
};

export default DisplayTodos;
