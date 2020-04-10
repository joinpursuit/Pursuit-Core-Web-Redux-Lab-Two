import { ADD_TODO } from "../Actions/actionTypes";

const nextToDoIdReducer = (state = 1, action) => {
  switch (action.type) {
    case ADD_TODO:
      state + 1;
    default:
      return state;
  }
};

export default nextToDoIdReducer;
