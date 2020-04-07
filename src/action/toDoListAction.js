import {ADD_TODO, IS_COMPLETE } from "./actionType.js"

export const addToDo = (list)=>{
    return{
        type: ADD_TODO,
        payload: list
    }
}

export const isComplete = (id)=>{
    return{
        type: IS_COMPLETE,
        payload: id
    }
}