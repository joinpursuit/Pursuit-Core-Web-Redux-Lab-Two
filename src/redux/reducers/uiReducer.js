/*
Joseph P. Pasaoa
Redux UserInterface Reducer | Todos a la Redux | React Redux Two Lab
*/


// EXTERNALS - LOCALS
import { SET_VISIBILITY_FILTER } from '../actionTypes';


const INITIAL_STATE = {
  visibilityFilter: "all"
}

const uiReducer = (state = INITIAL_STATE, action) => {
  const newState = { ...state };
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      newState.debug = "switch visibility filter";
      break;
    default:
      break;
  }
  return newState;
}

export default uiReducer;
