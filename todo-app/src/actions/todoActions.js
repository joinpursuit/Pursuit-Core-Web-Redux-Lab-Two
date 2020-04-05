import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from "./actionTypes";

export const addTodo = (todoList) => {
  return {
    type: ADD_TODO,
    payload: {
      text: 'Do something.'  
    }
  }
}