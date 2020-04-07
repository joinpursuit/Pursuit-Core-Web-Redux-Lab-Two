import {
  ADD_TODO,
  TOGGLE_TODO,
  //   SET_VISIBILITY_FILTER,
} from "../actions/actionTypes";

const _defaultState = {};
const todoReducer = (state = _defaultState, action) => {
  Object.freeze(state);

  let newState = { ...state };
  switch (action.type) {
    case ADD_TODO:
      newState[action.payload.id] = action.payload;
      return newState;
    case TOGGLE_TODO:
      newState[action.payload].todoItem.completed = !newState[action.payload]
        .todoItem.completed;

      return newState;
    default:
      return state;
  }
};

export default todoReducer;
