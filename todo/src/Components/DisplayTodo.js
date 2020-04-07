import React from "react";
import { useSelector } from "react-redux";

const DisplayTodo = () => {
  const todos = useSelector((state) => {
    return state.todos
  });
  return (
    <ul>
      {todos.map((todo, id) => {
        return <li key={id}>{todo}</li>;
    })}
    </ul>
  );
};

export default DisplayTodo;
