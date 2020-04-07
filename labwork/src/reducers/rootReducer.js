import addReducer from "./addReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    todos: addReducer
})

export default rootReducer;