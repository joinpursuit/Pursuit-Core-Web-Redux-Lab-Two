import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo } from "../actions/todoActions";

const DisplayTodos = () => {
  const todos = useSelector((state) => Object.values(state.todos));
  const todoo = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const clickHandler = (e) => {
    dispatch(toggleTodo(e.target.value));
  };

  return (
    <ul>
      {todos.map((todo) => {
        return todoo[todo.id].todoItem.completed === false ? (
          <li value={todo.id} onClick={clickHandler} key={todo.id}>
            {todo.text}
          </li>
        ) : (
          <li
            style={{ textDecorationLine: "line-through" }}
            value={todo.id}
            onClick={clickHandler}
            key={todo.id}
          >
            {todo.text}
          </li>
        );
      })}
    </ul>
  );
};

export default DisplayTodos;
