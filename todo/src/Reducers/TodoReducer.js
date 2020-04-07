import { ADD_TODO } from "../Actions/ActionTypes";

const _defaultState = {};

const TodoReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  const newState = { ...state };

  switch (action.type) {
    case ADD_TODO:
      let newTodo = { ...action.payload };
      newState[newTodo.id] = newTodo;
      return newState;
    default:
      return state;
  }
};

export default TodoReducer;
