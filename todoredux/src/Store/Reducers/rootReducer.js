import addTodoReducer from './TodoReducer'
import counterReducer from './counterReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    todoState: addTodoReducer,
    counterState: counterReducer,
})

export default rootReducer