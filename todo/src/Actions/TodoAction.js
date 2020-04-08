import { RECEIVE_TODO, TOGGLE_TODO } from "./ActionTypes";
import { receiveErrors } from './ErrorAction';

const addTodoToDatabase = async (todo) => {
  if(todo.body === "soda") throw Error("No Soda Allowed")
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return {data: { message: "Todo Added", todo}}
}

export const createTodo = (todo) => async (dispatch) => {
  try {
      // dispatch(toggleLoading())
      let res = await addTodoToDatabase(todo);
      // dispatch(toggleLoading())
      dispatch(receiveTodo(res.data.todo))
  } catch (err) {
      dispatch(receiveErrors(err.message))
  }
}

const receiveTodo = (todo) => ({
  type: RECEIVE_TODO, 
  payload: todo
});


export const toggleTodo = (todoId) => ({
  type: TOGGLE_TODO,
  payload: todoId
});