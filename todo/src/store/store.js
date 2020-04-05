import { createStore } from 'redux';
import todoReducer from '../reducers/todoReducer';
const store = createStore(todoReducer) // takes in reducer, initalState, enhancers / middleware 

export default store;