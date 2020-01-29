import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER} from '../actionTypes'

const initialState = {
    nextTodoId: 1,
    todos: [],
    visibilityFilter: 'all'
}

const Todos = (state = initialState, action) => {
    console.log('check action', action)
    const stateCopy = {...state}
    switch (action.type) {
        case ADD_TODO:
            stateCopy.nextTodoId = stateCopy.nextTodoId + 1
            break;
        case TOGGLE_TODO:
            stateCopy.
    }
}