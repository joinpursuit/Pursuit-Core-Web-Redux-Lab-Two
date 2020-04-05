import toDoReducer from './toDoReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    toDos: toDoReducer
    
})

export default rootReducer;