import { ADD_TODO } from '../ActionTypes'

const initialState = {
    nextTodoId: 0,
    todos: [],
    visibilityFilter: "all" // One of "all", "completed" or "active"
}

const addTodo = (state = initialState, action) => {
    console.log("Action Things", action)
    const stateCopy = { ...state }

    switch (action.type) {
        case ADD_TODO:
            console.log("Action Things", action.payload.text)
            stateCopy.nextTodoId = stateCopy.nextTodoId + 1
            stateCopy.todos.push(action.payload.text)
            // console.log("stateCopy", stateCopy)
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