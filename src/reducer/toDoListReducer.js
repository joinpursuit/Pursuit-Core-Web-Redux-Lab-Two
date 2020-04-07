// 1:{id:1, text: "Buy Groceries", completed: true/false}
// 2:{id:2, text: "Wash Car", completed: true/false}

import {ADD_TODO, IS_COMPLETE} from "../action/actionType"

// const _defaultState = {}

const toDoListReducer = (state = [], action)=>{
    // Object.freeze(state)
    // const newState ={...state}
    switch(action.type){
        case ADD_TODO:
            let list = {
                ...action.payload,
                completed: false
            }
            
            return [list, ...state]
        
        case IS_COMPLETE:
            let listToComplete = state[action.payload]
            listToComplete.completed = !listToComplete.completed
            return state
    

        default:
            return state
        
    }
        
    
}
export default toDoListReducer


