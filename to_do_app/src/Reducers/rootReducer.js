import { combineReducers } from "redux";
import todoReducer from "./todoReducer";
import visibilityFilterReducer from "./filterReducer";

const rootReducer = combineReducers({
  todo: todoReducer,
  visibilityFilter: visibilityFilterReducer
});

export default rootReducer;
