import todoReducer from "./todoReducer";
import loadingReducer from "./loadingReducer";
import visibilityFilterReducer from "./visibilityFilterReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  toDos: todoReducer,
  visibilityFilter: visibilityFilterReducer,
  loaded: false,
});

export default rootReducer;
