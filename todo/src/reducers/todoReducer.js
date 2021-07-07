import { ADD_ITEM, IS_COMPLETE } from '../actions/actionTypes';

const _defaultState = {};

const todoReducer = (state = _defaultState, action) => {
    Object.freeze(state)
    const newState = { ...state };
    switch (action.type) {
        case ADD_ITEM:
            let todo = { 
                ...action.payload, 
                completed: false
            }
            newState[todo.id] = todo;
            // return [todo, ...state]
            return newState
        case IS_COMPLETE:
            // let completeItem = state[action.payload]
            let completeItem = newState[action.payload]
            console.log(completeItem)
            completeItem.completed = !completeItem.completed
            // return state
            return newState
        default:
            return state; 
    }
}

export default todoReducer;