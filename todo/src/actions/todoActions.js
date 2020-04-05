import { ADD_TODO, COMPLETE_TODO, VISIBILITY_FILTER } from "./actionTypes";
let todoID = 0;

export const addTodo = (input) => {
  return {
    type: ADD_TODO,
    payload: {
      id: todoID++,
      text: input,
    },
  };
};

export const completeTodo = (id) => {
  return {
    type: COMPLETE_TODO,
    payload: id,
  };
};

export const todoVisibility = (filter) => {
  return {
    type: VISIBILITY_FILTER,
    payload: filter,
  };
};
