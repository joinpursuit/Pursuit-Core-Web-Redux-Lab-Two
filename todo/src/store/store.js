import { createStore } from 'redux';
import todoReducer from '../reducer/TodoReducer';
const store = createStore(todoReducer, [])

export default store; 