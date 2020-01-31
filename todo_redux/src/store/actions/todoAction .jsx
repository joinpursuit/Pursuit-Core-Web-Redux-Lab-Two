import { ADD_TODO, TOGGLE_COMPLETE, SET_FILTER } from "./actionTypes";


export const addTodo = (payload) => {
    return {
        type: ADD_TODO,
        payload
    };
};

export const toggleTodo = (id) => {
    return {
        type: TOGGLE_COMPLETE,
        id
    };
};

export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });

export const VISIBILITY_FILTERS = {
    ALL: "all",
    COMPLETED: "completed",
    INCOMPLETE: "incomplete"
};
