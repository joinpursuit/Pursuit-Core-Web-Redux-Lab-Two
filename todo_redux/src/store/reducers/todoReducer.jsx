
import { SET_FILTER, ADD_TODO, TOGGLE_COMPLETE } from '../actions/actionTypes';

const initialState = {
    nextTodoId: 1,
    todos: [],
    visibilityFilter: 'all'
}

export default (state = initialState, action) => {

    let stateCopy = { ...state }

    switch (action.type) {
        case ADD_TODO:
            let todo = action.payload
            todo.id = stateCopy.nextTodoId
            stateCopy.nextTodoId = stateCopy.nextTodoId + 1

            const newItem = { todo }
            stateCopy.todos = [...stateCopy.todos, newItem]
            break
        // case TOGGLE_COMPLETE:
        //     stateCopy.todo.completed = !stateCopy.todo.completed
        //     break
        case SET_FILTER: {
            return action.payload.filter;
        }
        default:
            break
    }
    return stateCopy;
};