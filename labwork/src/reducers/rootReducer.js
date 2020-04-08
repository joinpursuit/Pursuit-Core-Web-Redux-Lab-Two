import toDoReducer from "./toDoReducer";
import nextToDoIdReducer from "./nextToDoIdReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    nextTodoId: nextToDoIdReducer,
    todos: toDoReducer
    // visibilityFilter
})

export default rootReducer;