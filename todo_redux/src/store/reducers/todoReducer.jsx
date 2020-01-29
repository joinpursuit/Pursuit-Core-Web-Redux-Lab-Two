
import { NEW_TODO, VISIBILITY_FILTER, ADD_TODO, TOGGLE_COMPLETE } from '../actions/actionTypes';

const initialState = {
    nextTodoId: 0,
    todos: [],
    visibilityFilter: 'all',
    todo: {
        id: 0,
        text: '',
    }
}

export default (state = initialState, action) => {

    let stateCopy = { ...state }

    switch (action.type) {
        case NEW_TODO:
            stateCopy.todo = {
                id: stateCopy.nextTodoId,
                text: action.payload.target.value,
                completed: false
            }
            break
        case ADD_TODO:
            stateCopy.nextTodoId = stateCopy.nextTodoId + 1
            let todo = stateCopy.todo
            let nextTodoId = stateCopy.nextTodoId
            const newItem = { todo, nextTodoId }
            stateCopy.todos = [...stateCopy.todos, newItem]
            break
        case TOGGLE_COMPLETE:
            stateCopy.todo.completed = true
            break
        case VISIBILITY_FILTER:
            stateCopy.visibilityFilter = action.payload
            break
        default:
            break
    }
    return stateCopy;
};