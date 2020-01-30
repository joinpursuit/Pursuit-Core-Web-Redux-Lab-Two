import { VISIBILITY_FILTER, ADD_TODO, TOGGLE_COMPLETE, SET_FILTER } from "./actionTypes";


export const addTodo = (payload) => {
    return {
        type: ADD_TODO,
        payload
    };
};

export const toggleTodo = () => {
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
