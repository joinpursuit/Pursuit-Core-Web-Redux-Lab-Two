import {ADD_TODO, CLEAR_TODO} from './actionTypes'

export const addToDo = (toDo) =>{
    return{
        type: ADD_TODO,
        payload: toDo
    }
}

export const clearToDo = (id)=>{
    return{
        type:CLEAR_TODO,
        payload: id

    }
}