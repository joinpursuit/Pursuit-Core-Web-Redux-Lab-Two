import { CLEAR_ERRORS, DISPLAY_ERROR } from "./actionTypes";

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
});

export const displayErrors = (err) => ({
  type: DISPLAY_ERROR,
  payload: err,
});
