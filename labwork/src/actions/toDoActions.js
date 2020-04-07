import { ADD_TODO, TOGGLE_TODO } from "./actionTypes";

export const addToDo = (toDo) => {
    return {
        type: ADD_TODO,
        payload: toDo,
    }
}

export const toggleToDo = (id) => {
    return {
        type: TOGGLE_TODO,
        payload: id
    }
}