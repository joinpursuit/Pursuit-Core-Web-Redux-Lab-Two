import { ADD_TODO } from "../actions/actionTypes"

const nextToDoIdReducer = (state = 1, action) => {
    switch(action.type) {
        case ADD_TODO:
            return state + 1
        default: return state
    }
}

export default nextToDoIdReducer;