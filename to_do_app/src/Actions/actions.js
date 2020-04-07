import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from "./actionTypes";

let nextTodo = 0;

export const addToDo = item => ({
  type: ADD_TODO,
    payload: item
});

export const toggleToDo = id => ({
  type: TOGGLE_TODO,
  payload: { id }
});

export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  payload: { filter }
});
