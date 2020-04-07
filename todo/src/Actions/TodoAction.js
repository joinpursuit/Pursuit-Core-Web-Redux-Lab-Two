import {ADD_TODO} from './ActionTypes';

export const addTodo = (item) =>{
    return{
        type: ADD_TODO,
        payload: item
    }
}