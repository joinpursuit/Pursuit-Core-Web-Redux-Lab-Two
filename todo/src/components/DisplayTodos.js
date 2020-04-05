import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { completeTodo } from "../actions/todoActions";
import { todoVisibility } from "../actions/todoActions";

const DisplayTodos = () => {
  const todoList = useSelector((state) => Object.values(state.toDos));
  const visibility = useSelector((state) => state.visibilityFilter);

  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    let id = e.currentTarget.id;
    dispatch(completeTodo(id));
  };

  const handleVisibility = (e) => {
    e.preventDefault();
    dispatch(todoVisibility(e.currentTarget.value));
  };

  const filterVisibility = () => {
    if (visibility === "ALL") {
      return displayAllList;
    } else if (visibility === "ACTIVE") {
      return displayActiveList;
    } else if (visibility === "COMPLETE") {
      return displayCompletedList;
    }
  };

  let displayAllList = todoList.map((todo) => {
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

  let displayActiveList = todoList.map((todo) => {
    return todo.completed === false ? (
      <li key={todo.id} id={todo.id} onClick={(e) => handleClick(e)}>
        {todo.text}
      </li>
    ) : null;
  });

  let displayCompletedList = todoList.map((todo) => {
    return todo.completed === true ? (
      <li key={todo.id} style={{ textDecoration: "line-through" }} id={todo.id}>
        {todo.text}
      </li>
    ) : null;
  });

  return (
    <>
      <button
        type="onClick"
        value="ALL"
        onClick={(e) => {
          handleVisibility(e);
        }}
      >
        All
      </button>
      <button
        type="onClick"
        value="ACTIVE"
        onClick={(e) => handleVisibility(e)}
      >
        Active
      </button>
      <button
        type="onClick"
        value="COMPLETE"
        onClick={(e) => handleVisibility(e)}
      >
        Completed
      </button>
      <ul>{filterVisibility()}</ul>
    </>
  );
};

export default DisplayTodos;
