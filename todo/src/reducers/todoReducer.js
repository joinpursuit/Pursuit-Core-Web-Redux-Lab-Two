import { ADD_TODO, COMPLETE_TODO } from "../actions/actionTypes.js";

const _defaultState = {};
const todoReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  const newState = { ...state };

  switch (action.type) {
    case ADD_TODO:
      let newTodo = { ...action.payload };
      newState[newTodo.id] = newTodo;
      return newState;
    case COMPLETE_TODO:
      let toDoItem = newState[action.payload];
      toDoItem[toDoItem.completed] = true;
      return newState;
    default:
      return newState;
  }
};

export default todoReducer;
