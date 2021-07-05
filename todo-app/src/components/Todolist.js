import React from "react";
import { markComplete } from "../actions/todoActions";
import { useDispatch } from "react-redux";

const Todolist = ({ allTodos }) => {
  const dispatch = useDispatch();
  let showTodos = allTodos.map((todo) => {
    return (
      <li
        key={todo.id}
        value={todo.id}
        style={todo.completed ? { textDecoration: "line-through" } : {}}
        onClick={(e) => dispatch(markComplete(e.currentTarget.value))}
      >
        {todo.text}
      </li>
    );
  });

  return <ul>{showTodos}</ul>;
};

export default Todolist;
