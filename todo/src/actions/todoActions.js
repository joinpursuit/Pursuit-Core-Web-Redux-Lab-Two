import {
  ADD_TODO,
  TOGGLE_TODO,
  //   SET_VISIBILITY_FILTER,
} from "./actionTypes";

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: {
      id: todo.id,
      todo,
      text: todo.text,
    },
  };
};

export const toggleTodo = () => {
  return {
    type: TOGGLE_TODO,
  };
};
