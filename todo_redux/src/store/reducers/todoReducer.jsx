
import { ADD_TODO, VISIBILITY_FILTER } from '../actions/actionTypes';

const initialState = {
    nextTodoId: 0,
    todos: [],
    text: '',
    visibilityFilter: 'all'
}

export default (state = initialState, action) => {

    let stateCopy = { ...state }

    switch (action.type) {
        case ADD_TODO:
            stateCopy.todos = action.payload
            break
        case VISIBILITY_FILTER:
            stateCopy.visibilityFilter = action.payload
            break
        default:
            break
    }
    return stateCopy;
};