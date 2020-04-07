import { ADD_TODO, TOGGLE_TODO,SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED} from '../actions/actionTypes'

let id =0;
export const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        payload: {
            id: ++id,
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


export const showall = () => {
    return {
        type: SHOW_ALL
    }
}
export const showActive = () => {
    return {
        type: SHOW_ACTIVE
    }
}
export const showCompleted = () => {
    return {
        type: SHOW_COMPLETED  
    }
}