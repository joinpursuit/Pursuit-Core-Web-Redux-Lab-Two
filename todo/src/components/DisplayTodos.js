import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { completeTodo } from "../actions/todoActions";

const DisplayTodos = () => {
  const todoList = useSelector((state) => Object.values(state.toDos));
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    let id = e.currentTarget.id;
    debugger;
    dispatch(completeTodo(id));
  };

  let displayList = todoList.map((todo) => {
    return todo.completed === false ? (
      <li key={todo.id} id={todo.id} onClick={(e) => handleClick(e)}>
        {todo.text}
      </li>
    ) : (
      <li key={todo.id} style={{ textDecoration: "line-through" }} id={todo.id}>
        {todo.text}
      </li>
    );
  });

  debugger;

  return (
    <>
      <button type="onClick">All Todos</button>
      <button type="onClick">Active</button>
      <button type="onClick">Completed</button>
      <ul>{displayList}</ul>
    </>
  );
};

export default DisplayTodos;
