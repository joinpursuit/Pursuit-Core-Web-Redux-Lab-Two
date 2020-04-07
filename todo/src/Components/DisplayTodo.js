import React from "react";
import { useSelector } from "react-redux";

const DisplayTodo = () => {
  const todos = useSelector((state) => {
    return Object.values(state.todos);
  });
  return (
    <ul>
      {todos.map((todo) => {
        return <li key={todo.id}>{todo.item}</li>;
    })}
    </ul>
  );
};

export default DisplayTodo;
