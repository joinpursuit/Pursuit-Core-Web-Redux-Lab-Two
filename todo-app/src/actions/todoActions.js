import { ADD_TODO, TOGGLE_TODO } from "./actionTypes";

export const createTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo
  }
}

export const markComplete = (id) => {
  return {
    type: TOGGLE_TODO,
    payload: id
  }
}

// export const filterTodo = (id) => {
//   return {
//     type: SET_FILTER,
//     payload: id
//   }
// }
