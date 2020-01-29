import { ADD_TODO, VISIBILITY_FILTER } from "./actionTypes";

export const addTodo = (payload) => {
    return {
        type: ADD_TODO,
        payload
    };
};

export const changeVisibilityFilter = (payload) => {
    return {
        type: VISIBILITY_FILTER,
        payload
    };
};
