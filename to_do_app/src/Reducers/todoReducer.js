import { ADD_TODO, TOGGLE_TODO } from "../Actions/actionTypes";

const _defaultState = [];

const todoReducer = (state = _defaultState, action) => {
  Object.freeze(state);

  //   {
  //     nextTodoId: 1,
  //     todos: [],
  //     visibilityFilter: "all" // One of "all", "completed" or "active"
  //   }

  switch (action.type) {
    case ADD_TODO:
      let newState = [...state, action.payload];
      return newState;
    case TOGGLE_TODO:
      const todo = { ...newState[action.payload] };
      todo.complete = !todo.complete;
      newState[payload] = todo;
      return newState;
    default:
      return state;
  }
};

export default todoReducer;
