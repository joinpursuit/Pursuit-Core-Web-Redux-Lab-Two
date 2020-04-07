import { TOGGLE_TODO } from '../Actions/actionTypes'

const _defaultState = {};

const toggleReducer = (state = _defaultState, action ) => {
    const newState = { ...state };
    switch(action.type) {
        case TOGGLE_TODO:
            let toggle = {
                ...action.payload,
                completed: false
            }
            // newState[todo.id] = todo
            // return newState;
        default:
            return state

    }
}

export default toggleReducer;