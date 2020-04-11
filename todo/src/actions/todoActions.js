import {
  ADD_TODO,
  COMPLETE_TODO,
  VISIBILITY_FILTER,
  DISPLAY_TODOS,
} from "./actionTypes";
import axios from "axios";

let todoID = 0;

// const addTodoToDatabase = async (todo) => {
//   if (todo.body === "soda") throw Error("No Soda Allowed");
//   await new Promise((resolve) => setTimeout(resolve, 500));
//   return { data: { message: "Todo Added", todo } };
// };

export const receiveTodos = (todos) => {
  return {
    type: DISPLAY_TODOS,
    payload: todos,
  };
};

// export const addTodo = (input) => {
//   return {
//     type: ADD_TODO,
//     payload: {
//       id: todoID++,
//       text: input,
//       completed: false,
//     },
//   };
// };

// export const toggleTodo = (id) => {
//   return {
//     type: COMPLETE_TODO,
//     payload: id,
//   };
// };

export const todoVisibility = (filter) => {
  return {
    type: VISIBILITY_FILTER,
    payload: filter,
  };
};

export const fetchTodos = () => async (dispatch) => {
  try {
    let res = await axios.get("http://localhost:3000/todos");
    dispatch(receiveTodos(res.data.payload));
  } catch (error) {
    console.log(error);
  }
};

export const updateTodos = (id, completed) => async (dispatch) => {
  try {
    let res = await axios.patch(`http://localhost:3000/todos/${id}`, {
      completed: !completed,
    });
    dispatch(fetchTodos());
  } catch (error) {
    console.log(error);
  }
};

export const addSingleTodo = (description) => async (dispatch) => {
  try {
    let res = await axios.post(`http://localhost:3000/todos/`, {
      description,
    });
    dispatch(fetchTodos());
  } catch (error) {
    console.log(error);
  }
};
