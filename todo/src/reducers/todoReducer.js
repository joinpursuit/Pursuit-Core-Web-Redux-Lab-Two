import { ADD_ITEM, IS_COMPLETE } from '../actions/actionTypes';

const todoReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_ITEM:
            let todo = { 
                ...action.payload, 
                completed: false
            }
            return [todo, ...state]
        case IS_COMPLETE:
            let completeItem = state[action.payload]
            completeItem.completed =!completeItem.completed
            return state
        default:
            return state; 
    }
}

export default todoReducer;