import { ADD_TODO, COMPLETE_TODO } from "./actionTypes";
let todoID = 0;

export const addTodo = (input) => {
  return {
    type: ADD_TODO,
    payload: {
      id: todoID + 1,
      text: input,
      completed: false,
    },
  };
};

export const completeTodo = (id) => {
  return {
    type: COMPLETE_TODO,
    payload: id,
  };
};
