import {
  ADD_TODO,
  TOGGLE_TODO,
  //   SET_VISIBILITY_FILTER,
} from "../actions/actionTypes";

const _defaultState = {};
const todoReducer = (state = _defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case ADD_TODO:
      let newState = { ...state };
      newState[action.payload.id] = action.payload;
      return newState;
    case TOGGLE_TODO:
    default:
      return state;
  }
};

export default todoReducer;
