import {
  ADD_TODO,
  COMPLETE_TODO,
  DISPLAY_TODOS,
} from "../actions/actionTypes.js";

const _defaultState = {};
const todoReducer = (state = _defaultState, { type, payload }) => {
  // still takes in action, destructors it
  Object.freeze(state);
  let newState = { ...state };

  switch (type) {
    case ADD_TODO:
      newState[payload.id] = payload;
      return newState;
    case DISPLAY_TODOS:
      newState = payload;
      return newState;
    case COMPLETE_TODO:
      const todo = { ...newState[payload] };
      todo.complete = !todo.complete;
      newState[payload] = todo;
      return newState;
    default:
      return newState;
  }
};

export default todoReducer;
