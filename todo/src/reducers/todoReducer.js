import {
  ADD_TODO,
  //   TOGGLE_TODO,
  //   SET_VISIBILITY_FILTER,
} from "../actions/actionTypes";

const _defaultState = [];
const todoReducer = (state = _defaultState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];

    default:
      return state;
  }
};

export default todoReducer;
