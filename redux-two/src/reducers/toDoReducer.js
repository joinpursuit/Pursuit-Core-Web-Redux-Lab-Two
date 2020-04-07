import {ADD_TODO, CLEAR_TODO} from '../actions/actionTypes'

const _defaultState ={}
const toDoReducer =(state=[], action)=>{
    Object.freeze(state)
    switch(action.type){
        case ADD_TODO:
            let newToDo = [...state, ...action.payload]
        
        case CLEAR_TODO:
            return [];
            default:
                break
    }
}


export default toDoReducer;