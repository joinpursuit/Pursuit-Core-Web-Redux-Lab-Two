import todoReducer from "./todoReducer";
import loadingReducer from "./loadingReducer";
import visibilityFilterReducer from "./visibilityFilterReducer";
import errorsReducer from "./errorsReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  toDos: todoReducer,
  errors: errorsReducer,
  visibilityFilter: visibilityFilterReducer,
  loading: loadingReducer,
});

export default rootReducer;
