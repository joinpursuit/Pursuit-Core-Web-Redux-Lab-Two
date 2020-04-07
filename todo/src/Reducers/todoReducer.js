import { ADD_TODO } from '../Actions/actionTypes'

const defaultState = {
    nextTodoId: 1,
    todos: []
}

const todoReducer = (state = defaultState, action) => {
    const newState = { ...state };
    switch(action.type) {
        case ADD_TODO:
            let todo = {
                ...action.payload,
                completed: false
            }
            newState.todos.push(todo)
            newState.nextTodoId ++
            return newState;
        default:
            return state

    }
}

export default todoReducer;
