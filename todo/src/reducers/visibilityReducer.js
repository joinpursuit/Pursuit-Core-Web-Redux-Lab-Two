import { SET_VISIBILITY_FILTER } from "../actions/actionTypes";

const _defaultState = "ALL";

const visReducer = (state = _defaultState, action) => {
  let newState = state;

  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action;

    default:
      return newState;
  }
};

export default visReducer;
