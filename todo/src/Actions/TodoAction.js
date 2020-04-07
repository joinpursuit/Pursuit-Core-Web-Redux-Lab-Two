import { ADD_TODO, COMPLETE_TODO, VISIBLE_TODO } from "./ActionTypes";

let idItem = 0;
export const addTodo = (item) => {
  return {
    type: ADD_TODO,
    payload: {
      id: idItem++,
      list: item,
    },
  };
};

export const completeTodo = (id) =>{
  return{
    type: COMPLETE_TODO,
    payload: id
  }
}

export const filterTodo = (view) =>{
  return{
    type: VISIBLE_TODO,
    payload: view
  }
}
