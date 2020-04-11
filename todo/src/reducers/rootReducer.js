import toDoReducer from './toDoReducer'
import nextToDoReducer from './nextToDoReducer'
import visibilityFilterReducer from './visibilityFilterReducer'
import errorsReducer from './errorsReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    toDos: toDoReducer,
    nextId: nextToDoReducer,
    visibilityFilter: visibilityFilterReducer,
    error: errorsReducer
})

export default rootReducer;