import { ADD_TODO, TOGGLE_TODO } from "./actionTypes";

export const addTodo = (todoObj) => {
  return {
    type: ADD_TODO,
    payload: {
      id: todoObj.id,
      todoItem: todoObj,
      text: todoObj.text,
    },
  };
};

export const toggleTodo = (value) => {
  return {
    type: TOGGLE_TODO,
    payload: value,
  };
};
