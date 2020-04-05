import todoReducer from '../reducers/addTodoReducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  todos: todoReducer
})

export default rootReducer;