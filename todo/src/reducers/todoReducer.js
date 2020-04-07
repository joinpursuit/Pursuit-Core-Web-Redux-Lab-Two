import { ADD_ITEM, IS_COMPLETE } from '../actions/actionTypes';

const todoReducer = (state = [], action) => {
    // const newState = [ ...state ];

    switch (action.type) {
        case ADD_ITEM:
            let todo = { 
                ...action.payload, 
                completed: false
            }
            return [todo, ...state]
            // newState[todo.id] = todo; 
            // return newState;
        case IS_COMPLETE:
            // let completeItem = newState[action.payload]
            let completeItem = state[action.payload]
            completeItem.completed = !completeItem.completed
            return state
        default:
            return state; 
    }
}

export default todoReducer;