import { NEW_TODO, VISIBILITY_FILTER, ADD_TODO, TOGGLE_COMPLETE, SET_FILTER } from "./actionTypes";

export const newTodo = (text) => {
    return {
        type: NEW_TODO,
        text
    };
};
export const addTodo = () => {
    return {
        type: ADD_TODO,
    };
};

export const toggleComplete = () => {
    return {
        type: TOGGLE_COMPLETE,
    };
};

export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });

// export const changeVisibilityFilter = (payload) => {
//     return {
//         type: VISIBILITY_FILTER,
//         payload
//     };
// };
