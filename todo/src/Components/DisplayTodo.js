import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { completeTodo } from "../Actions/TodoAction";

const DisplayTodo = () => {
  const todosList = useSelector((state) => {
    return Object.values(state.todos);
  });
  const dispatch = useDispatch();

  const lineThrough = { textDecoration: "line-through" };
  const onClick = (e) => {
    e.preventDefault();
    let id = e.currentTarget.id;
    dispatch(completeTodo(id));
  };

  // const display = useDispatch();

  let displayList = todosList.map((list) => {
    return list.complete === false ? (
      <li key={list.id} id={list.id} onClick={(e) => onClick(e)}>
        {list.list}
      </li>
    ) : (
      <li key={list.id} id={list.id} style={lineThrough}>
        {list.list}
      </li>
    );
  });
  return <ul>{displayList}</ul>;
};

export default DisplayTodo;
