import { SET_FILTER } from "../actions/actionTypes";

const _defaultState = "All";

const filterReducer = (state = _defaultState, action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.payload;
   default:
      return state
  }
}

export default filterReducer;
