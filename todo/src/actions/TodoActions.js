import { ADD_TODO, TOGGLE_TODO} from '../actions/actionTypes'

let id =1;
export const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        payload: {
            id: id++,
            todo,
            completed:false
        }
    }
}

export const toggleTodo = (id) => {
    return {
        type: TOGGLE_TODO,
        id
    }
}