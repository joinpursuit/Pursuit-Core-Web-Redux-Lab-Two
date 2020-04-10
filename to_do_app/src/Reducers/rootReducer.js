import { combineReducers } from "redux";
import todoReducer from "./todoReducer";
import visibilityFilterReducer from "./filterReducer";
import nextToDoIdReducer from "../Reducers/nextToDoId";
import postsReducer from "./postsReducer";

const rootReducer = combineReducers({
  todo: todoReducer,
  visibilityFilter: visibilityFilterReducer,
  nextId: nextToDoIdReducer,
  posts: postsReducer
});

export default rootReducer;
