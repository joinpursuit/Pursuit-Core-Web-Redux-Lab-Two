import { combineReducers } from 'redux' 

import todoReducer from '../Reducers/todoReducer'
import idReducer from '../Reducers/idReducer'
import filterReducer from  '../Reducers/filterReducer'

const rootReducer = combineReducers({
    id: idReducer,
    todo: todoReducer,
    filter: filterReducer
    }
)

export default rootReducer