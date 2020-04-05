const { ADD_ITEM } = require('./actionTypes');

export const addItem = (todo) => {
    return {
        type: ADD_ITEM,
        payload: {
            todo
        }
    }
}