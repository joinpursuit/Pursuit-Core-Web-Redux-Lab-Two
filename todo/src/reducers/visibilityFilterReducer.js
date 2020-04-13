import { VISIBILITY_FILTER } from "../actions/actionTypes";

const visibilityFilterReducer = (state = "all", action) => {
  Object.freeze(state);
  switch (action.type) {
    case VISIBILITY_FILTER:
      return action.payload;
    default:
      return state;
  }
};

export default visibilityFilterReducer;
