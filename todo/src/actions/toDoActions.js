import { ADD_ITEM, TOGGLE_TODO, SET_VISIBILITY_FILTER } from './actionTypes'

export const addItem = (item) => {
    debugger
    return {
        type: ADD_ITEM,
        payload: item   
    }
}