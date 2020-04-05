import toDo from '../components/toDo'
import completed from '../components/completed'

import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    toDo: toDoReducer,
    completed: completedReducer
})

export default rootReducer
