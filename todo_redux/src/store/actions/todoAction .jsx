import { NEW_TODO, VISIBILITY_FILTER } from "./actionTypes";

export const newTodo = (payload) => {
    return {
        type: NEW_TODO,
        payload
    };
};

export const changeVisibilityFilter = (payload) => {
    return {
        type: VISIBILITY_FILTER,
        payload
    };
};
