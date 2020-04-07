import { ADD_ITEM } from '../actions/actionTypes';

const todoReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_ITEM:
            let todo = { 
                ...action.payload, 
                completed: false
            }
            return [todo, ...state]
        default:
            return state; 
    }
}

export default todoReducer;