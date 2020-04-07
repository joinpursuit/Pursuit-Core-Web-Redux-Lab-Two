import { ADD_TODO } from '../Actions/actionTypes'

const _defaultState = {};

const todoReducer = (state = _defaultState, action ) => {
    const newState = { ...state };
    switch(action.type) {
        case ADD_TODO:
            let todo = {
                ...action.payload,
                completed: false
            }
            newState[todo.id] = todo
            return newState;
        default:
            return state

    }
}

export default todoReducer;
