import { SET_FILTER } from "../actions/actionTypes";

const _defaultState = "ALL"
const filterReducer = (state = _defaultState, action) => {
  switch (action.type) {
    case SET_FILTER:
     return "this is working" 

  
    default:
     return state
  }
}

export default filterReducer