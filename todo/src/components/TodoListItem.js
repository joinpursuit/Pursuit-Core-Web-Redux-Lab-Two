import React from "react";
import { useDispatch } from "react-redux";
import { updateTodos } from "../actions/todoActions";
import "../css/TodoListItem.css";

const TodoListItem = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <li
      className={todo.completed ? "complete" : "unfinished"}
      onClick={() => dispatch(updateTodos(todo.id, todo.completed))}
    >
      {todo.description}
    </li>
  );
};

export default TodoListItem;
