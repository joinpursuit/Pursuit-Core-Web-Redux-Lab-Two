import { VISIBLE_TODO } from '../Actions/ActionTypes';

const _defaultState = 'WHOLE';

const visibilityReducer = (state = _defaultState, action) =>{
    Object.freeze(state);
    let newState = state;
    switch(action.type){
        case VISIBLE_TODO:
            newState = action.payload;
            return newState
        default:
            return newState
    }

};

export default visibilityReducer;