import { ADD_TODO } from "../Actions/ActionTypes";

const TodoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
        return [...state, action.payload]
    default:
      return state;
  }
};

export default TodoReducer;


