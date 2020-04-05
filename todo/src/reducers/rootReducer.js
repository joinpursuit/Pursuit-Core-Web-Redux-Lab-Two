import todoReducer from "./todoReducer";
import visibilityFilterReducer from "./visibilityFilterReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  toDos: todoReducer,
  visibilityFilter: visibilityFilterReducer,
});

export default rootReducer;
