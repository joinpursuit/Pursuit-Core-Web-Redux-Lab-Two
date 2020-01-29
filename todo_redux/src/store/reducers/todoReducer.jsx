
import { ADD_TODO } from '../actions/actionTypes';

const initialState = {
    todo: [],
}

export default (state = initialState, action) => {

    let stateCopy = { ...state }

    switch (action.type) {
        case ADD_TODO:
            stateCopy.todo = action.payload
            break
        default:
            break
    }
    return stateCopy;
};