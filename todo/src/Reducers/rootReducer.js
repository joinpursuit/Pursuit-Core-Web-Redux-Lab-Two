import toggleReducer from './toggleReducer'
import todoReducer from './todoReducer'

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    addTodo: todoReducer,
    toggleTodo: toggleReducer
})

export default rootReducer;