import {ADD_TODO, CLEAR_TODO} from './actionTypes'

export const addToDo = (todo) =>{
    return{
        type: ADD_TODO,
        payload: todo
    }
}

export const clearToDo = ()=>{
    return{
        type:CLEAR_TODO
    }
}