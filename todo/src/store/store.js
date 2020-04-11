import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk' // will allow us to dispatch functions as well as actions
const store = createStore(rootReducer, {toDos: []}, applyMiddleware(logger, thunk))

export default store;
