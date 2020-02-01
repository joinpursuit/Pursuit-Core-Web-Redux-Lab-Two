import { ADD_TODO } from '../ActionTypes'

const initialState = {
    nextTodoId: 0,
    todos: [],
    visibilityFilter: "all" // One of "all", "completed" or "active"
}

const addTodo = (state = initialState, action) => {

    const stateCopy = { ...state }

    switch (action.type) {
        case ADD_TODO:
            stateCopy.nextTodoId = stateCopy.nextTodoId + 1
            stateCopy.todos = action.payload
            break;

        default:
            break;
    }
    return stateCopy
}

export default addTodo

// export const addTodo = content => ({
//     type: ADD_TODO,
//     payload: {
//         id: ++nextTodoId,
//         content
//     }
// })

// export default filmsReducer