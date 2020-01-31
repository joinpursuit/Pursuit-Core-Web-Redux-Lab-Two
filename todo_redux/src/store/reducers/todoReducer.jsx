
import { SET_FILTER, ADD_TODO, TOGGLE_COMPLETE, VISIBILITY_FILTERS } from '../actions/actionTypes';

const initialState = {
    nextTodoId: 1,
    todos: [],
    visibilityFilter: VISIBILITY_FILTERS.ALL
}

export default (state = initialState, action) => {

    let stateCopy = { ...state }

    switch (action.type) {
        case ADD_TODO:
            let todo = action.payload
            todo.id = stateCopy.nextTodoId
            todo.completed = false
            stateCopy.nextTodoId = stateCopy.nextTodoId + 1

            const newItem = { todo }
            stateCopy.todos = [...stateCopy.todos, newItem]
            break

        case TOGGLE_COMPLETE:
            stateCopy.todos.map(el => {
                return (
                    el.todo.id === action.id ? el.todo.completed = !el.todo.completed : null
                )
            })
            break
        case SET_FILTER: {
            return action.payload.filter;
        }
        default:
            break
    }
    return stateCopy;
};