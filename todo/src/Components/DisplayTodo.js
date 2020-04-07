import React from "react";
import { useSelector } from "react-redux";

const DisplayTodo = () => {
  const todosList = useSelector((state) => {
    return Object.values(state.todos);
  });

  let displayList = todosList.map((list) => {
    return <li key={list.id}>{list.list}</li>;
  });
  return <ul>{displayList}</ul>;
};

export default DisplayTodo;
