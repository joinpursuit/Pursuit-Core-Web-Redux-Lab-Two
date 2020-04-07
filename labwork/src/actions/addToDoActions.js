import { ADD_TODO } from "./actionTypes";

export const addToDo = (text) => {
    return {
        type: ADD_TODO,
        payload: text
    }
}