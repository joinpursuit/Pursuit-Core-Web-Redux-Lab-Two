
import toDoReducer from './toDoReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    toDo: toDoReducer,
    
})

export default rootReducer
