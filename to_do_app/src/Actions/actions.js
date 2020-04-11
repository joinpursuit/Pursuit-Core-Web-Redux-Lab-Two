import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from "./actionTypes";

let nextTodo = 0;

//async
const addToDoToDB = async todo => {
  await new Promise(resolve => setTimeout(resolve, 3000));
  return { data: { message: "todo added", todo } };
};

export const createTodo = todo => {
  try {
    return async (dispatch, getState) => {
      let res = await addToDoToDB(todo);
      dispatch(addToDo(res.todo));
    };
  } catch (error) {
    console.log(error);
  }
};

const addToDo = item => ({
  type: ADD_TODO,
  payload: item
});

export const toggleToDo = id => ({
  type: TOGGLE_TODO,
  payload: { id }
});

export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  payload: filter
});
