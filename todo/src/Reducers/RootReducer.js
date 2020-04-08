import { combineReducers } from 'redux';
import todosReducer from './TodoReducer';
import nextTodoIdReducer from "./NextTodoId";
import visibilityFilterReducer from './VisibilityFilter';
import errorsReducer from './ErrorReducer'

export default combineReducers({
  todos: todosReducer,
  nextId: nextTodoIdReducer,
  visibilityFilter: visibilityFilterReducer,
  errors: errorsReducer,
});