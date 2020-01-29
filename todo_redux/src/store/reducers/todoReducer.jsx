
import { NEW_TODO, VISIBILITY_FILTER } from '../actions/actionTypes';

const initialState = {
    nextTodoId: 0,
    todos: [],
    text: '',
    visibilityFilter: 'all'
}

export default (state = initialState, action) => {

    let stateCopy = { ...state }

    switch (action.type) {
        case NEW_TODO:
            stateCopy.text = action.payload.target.value
            break
        case VISIBILITY_FILTER:
            stateCopy.visibilityFilter = action.payload
            break
        default:
            break
    }
    return stateCopy;
};