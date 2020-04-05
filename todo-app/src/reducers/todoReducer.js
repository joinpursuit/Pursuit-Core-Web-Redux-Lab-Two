import { ADD_TODO, TOGGLE_TODO } from "../actions/actionTypes"
const _defaultState = {};
const todoReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  const newState = { ...state };
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload]
    case TOGGLE_TODO:
      return [];
    default:
      return state;
  }
}
export default todoReducer;