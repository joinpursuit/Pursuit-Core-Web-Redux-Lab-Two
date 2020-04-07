import { ADD_TODO, TOGGLE_TODO } from "../Actions/actionTypes";

const _defaultState = [];

const todoReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  const newState = [...state];

  //   {
  //     nextTodoId: 1,
  //     todos: [],
  //     visibilityFilter: "all" // One of "all", "completed" or "active"
  //   }

  switch (action.type) {
    case ADD_TODO:
      return [];
    default:
      return state;
  }
};

export default todoReducer;
