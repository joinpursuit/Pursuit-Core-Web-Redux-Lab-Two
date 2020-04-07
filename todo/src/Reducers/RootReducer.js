import TodoReducer from "./TodoReducer";
import { combineReducers } from "redux";

const RootReducer = combineReducers({
  todos: TodoReducer,
});

export default RootReducer;
