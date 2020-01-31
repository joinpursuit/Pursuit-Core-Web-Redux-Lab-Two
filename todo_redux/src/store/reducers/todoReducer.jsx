
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
        case SET_FILTER:
            console.log('action filter', action.filter);
            stateCopy.visibilityFilter = action.filter

            // switch (action.payload.filter) {
            //     case 'all':
            //         stateCopy.visibilityFilter = action.filter
            //         return stateCopy.todos
            //     case 'complete':
            //         stateCopy.visibilityFilter = action.filter
            //         return stateCopy.todos.map(el => el.completed === true)
            //     default:
            //         break;
            // }
            break
        default:
            break
    }
    return stateCopy;
};