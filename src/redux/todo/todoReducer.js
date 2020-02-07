import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER
} from '../actionTypes';


const INITIAL_STATE = {
  todos: [],
  nextTodoId: 1,
  visibilityFilter: "all",
  debug: ""
}

const todoReducer = (state = INITIAL_STATE, action) => {
  const stateCopy = { ...state };
  switch (action.type) {
    case ADD_TODO:
      stateCopy.debug = "added todo";
      break;
    case TOGGLE_TODO:
      stateCopy.debug = "toggled todo";
      break;
    case SET_VISIBILITY_FILTER:
      stateCopy.debug = "switch visibility filter";
      break;
    default:
      break;
  }
  return stateCopy;
}

export default todoReducer;
