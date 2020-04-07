import { ADD_ITEM, TOGGLE_TODO } from './actionTypes'

export const addItem = (item) => {
    return {
        type: ADD_ITEM,
        payload: item   
    }
}

export const toggleTodo = (id) => {
    return {
        type: TOGGLE_TODO,
        payload: id
    }
}