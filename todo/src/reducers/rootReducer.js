import { combineReducers } from "redux";
import todoReducer from "./todoReducer";
import visReducer from "../reducers/visibilityReducer";
export const rootReducer = combineReducers({
  todos: todoReducer,
  visibilityFilter: visReducer,
});

export default rootReducer;
