import { SET_VISIBILITY_FILTER } from "./actionTypes";

export const setVis = (val) => {
  return {
    type: SET_VISIBILITY_FILTER,
    payload: val,
  };
};
