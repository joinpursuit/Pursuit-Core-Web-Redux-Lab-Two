import { ADD_ITEM } from './actionTypes';

export const addItem = (todo) => {
    return {
        type: ADD_ITEM,
        payload: todo
    }
}