import { LOADING } from "../actions/actionTypes";

const loadingReducer = (state = true, { type }) => {
  switch (type) {
    case LOADING:
      return !state;
    default:
      return state;
  }
};

export default loadingReducer;
