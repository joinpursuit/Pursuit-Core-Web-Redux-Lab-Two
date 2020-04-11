import { LOADING } from "../actions/actionTypes";

const _defaultState = true;
const loadingReducer = (state = _defaultState, { type }) => {
  switch (type) {
    case LOADING:
      return !state;
    default:
      return state;
  }
};

export default loadingReducer;
