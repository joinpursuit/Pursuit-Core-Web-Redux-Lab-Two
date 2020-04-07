import { ADD_TODO, COMPLETE_TODO } from "../Actions/ActionTypes";

const _defaultState = {};

const TodoReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  const newState = { ...state };

  switch (action.type) {
    case ADD_TODO:
      let newTodo = { ...action.payload, complete: false };
      newState[newTodo.id] = newTodo;
      return newState;
    case COMPLETE_TODO:
      let completedItem = newState[action.payload];
      completedItem.complete = true;
      return newState
    default:
      return newState;
  }
};

export default TodoReducer;
