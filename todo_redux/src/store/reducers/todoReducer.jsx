
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
            stateCopy = {
                ...stateCopy,
                visibilityFilter: action.filter
            }

            let backUP = stateCopy.todos
            switch (action.filter) {
                case 'all':
                    stateCopy.todos = backUP
                    break;
                case 'completed':
                    stateCopy.todos = stateCopy.todos.filter(el => el.todo.completed === true)
                    break;
                case 'incomplete':
                    stateCopy.todos = stateCopy.todos.filter(el => el.todo.completed === false)
                    break;
                default:
                    break;
            }
            break
        default:
            break
    }
    return stateCopy;
};