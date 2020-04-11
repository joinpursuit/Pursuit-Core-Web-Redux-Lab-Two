import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import VisibilityButtons from "./VisibilityButtons";
import TodoListItem from "./TodoListItem";
import axios from "axios";
import { fetchTodos } from "../actions/todoActions";

const filterTodos = (todoList, filter) => {
  if (filter === "all") return todoList;
  if (filter === "complete") return todoList.filter((todo) => todo.completed);
  if (filter === "active") return todoList.filter((todo) => !todo.completed);
};

const DisplayTodos = () => {
  const todoList = useSelector((state) => Object.values(state.toDos));
  const visibility = useSelector((state) => state.visibilityFilter);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return (
    <>
      <VisibilityButtons />
      {filterTodos(todoList, visibility)
        .reverse()
        .map((todo) => {
          return <TodoListItem todo={todo} key={todo.id} />;
        })}
    </>
  );
};

export default DisplayTodos;
