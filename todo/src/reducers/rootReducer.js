import todoReducer from "./todoReducer";
import loadingReducer from "./loadingReducer";
import visibilityFilterReducer from "./visibilityFilterReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  toDos: todoReducer,
  visibilityFilter: visibilityFilterReducer,
  loading: loadingReducer,
});

export default rootReducer;
