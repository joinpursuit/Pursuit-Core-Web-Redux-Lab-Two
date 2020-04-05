import todoReducer from "./todoReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  toDos: todoReducer,
});

export default rootReducer;
