import React from "react";
import Todo from "./ToDo";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleToDo } from "../Actions/actions";
const filterTodo = (todos, filter) => {
  if (filter === "all") return todos;
  if (filter === "complete") {
    return todos.filter(todo.complete);
  }
  if (filter === "activr") {
    return todos.filter(todo => !todo.complete);
  }
};

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => Object.values(state.todos));
  const filter = useSelector(state => state.visibilityFilter);

  return (
    <div>
      <ul>
        {filterTodo(
          todo.map(todo => {
            return (
              <li onClick={() => dispatch(toggleToDo(todo.id))}>
                {" "}
                todo= {todo} key={todo.id}
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
};

export default TodoList;
