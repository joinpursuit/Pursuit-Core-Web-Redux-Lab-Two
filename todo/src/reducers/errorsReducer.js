import { CLEAR_ERRORS, DISPLAY_ERROR } from "../actions/actionTypes";

const errorsReducer = (state = "", action) => {
  switch (action.type) {
    case DISPLAY_ERROR:
      return action.payload;
    case CLEAR_ERRORS:
      return "";
    default:
      return state;
  }
};

export default errorsReducer;
