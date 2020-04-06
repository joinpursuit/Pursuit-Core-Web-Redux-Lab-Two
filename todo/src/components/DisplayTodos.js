import React from "react";
import { useSelector } from "react-redux";

const DisplayTodos = () => {
  const todos = useSelector((state) => Object.values(state));

  return (
    <ul>
      {todos.map((todo, i) => {
        return <li key={todo.id}>{todo.text}</li>;
      })}
    </ul>
  );
};

export default DisplayTodos;
