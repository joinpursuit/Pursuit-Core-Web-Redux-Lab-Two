import { LOADING } from "../actions/actionTypes";

const loadingReducer = (state, { type }) => {
  switch (type) {
    case LOADING:
      return !state.loading;
    default:
      return state;
  }
};

export default loadingReducer;
