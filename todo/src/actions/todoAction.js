import { ADD_ITEM, IS_COMPLETE } from './actionTypes';

export const addItem = (todo) => {
    return {
        type: ADD_ITEM,
        payload: todo
    }
}

export const isComplete = (id) => {
    return {
        type: IS_COMPLETE,
        payload: id
    }
}