import { NEW_TODO, VISIBILITY_FILTER, ADD_TODO } from "./actionTypes";

export const newTodo = (payload) => {
    return {
        type: NEW_TODO,
        payload
    };
};
export const addTodo = () => {
    return {
        type: ADD_TODO,
        // payload
    };
};

export const changeVisibilityFilter = (payload) => {
    return {
        type: VISIBILITY_FILTER,
        payload
    };
};
