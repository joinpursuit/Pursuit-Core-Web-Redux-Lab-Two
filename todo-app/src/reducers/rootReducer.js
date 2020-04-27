import todoReducer from './todoReducer';

import { combineReducers } from 'redux';
import filterReducer from './filterReducer'

const rootReducer = combineReducers({
  
  todos: todoReducer,
  filter: filterReducer
})

export default rootReducer;