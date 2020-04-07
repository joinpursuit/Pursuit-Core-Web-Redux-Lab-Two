import { ADD_TODO, COMPLETE_TODO } from "./ActionTypes";

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
