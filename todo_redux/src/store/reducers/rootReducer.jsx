import todoReducer from './todoReducer'
// import { visibilityFilter } from './visibilityReducer'

import { combineReducers } from "redux";

export default combineReducers(
    {
        todoReducer,
        // visibilityFilter
    }
);