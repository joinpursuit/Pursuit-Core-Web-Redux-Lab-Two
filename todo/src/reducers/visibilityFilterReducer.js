import { VISIBILITY_FILTER } from "../actions/actionTypes";

const _defaultState = "all";

const visibilityFilterReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let newState = state;

  switch (action.type) {
    case VISIBILITY_FILTER:
      newState = action.payload;
      return newState;
    default:
      return newState;
  }
};

export default visibilityFilterReducer;
