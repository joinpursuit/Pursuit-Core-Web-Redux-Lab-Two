import { SET_VISIBILITY_FILTER } from "../Actions/actionTypes";


// const initialState = {};

const visibilityFilterReducer = (state = "all", action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.payload.filter;
    default:
      return state;
  }
};

export default visibilityFilterReducer;
