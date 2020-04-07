import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo } from "../actions/todoActions";

const DisplayTodos = () => {
  const todosArr = useSelector((state) => Object.values(state.todos));

  const todoObj = useSelector((state) => state.todos);
  const visState = useSelector((state) => state.visibilityFilter);
  const dispatch = useDispatch();

  const todoFilter = (todosArr) => {
    return todosArr.filter((todo) => {
      if (visState === todo.completed) {
        return todo;
      }
    });
  };
  const todos = todoFilter(todosArr);

  const clickHandler = (e) => {
    dispatch(toggleTodo(e.target.value));
  };

  return (
    <ul>
      {todos.map((todo) => {
        return todoObj[todo.id].todoItem.completed === false ? (
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
