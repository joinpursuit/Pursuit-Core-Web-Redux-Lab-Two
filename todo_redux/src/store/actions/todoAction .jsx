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

export const setFilter = (filter) => {
    console.log(filter);

    return {
        type: SET_FILTER,
        filter
    }
}



