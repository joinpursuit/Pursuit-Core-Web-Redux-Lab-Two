/*
Joseph P. Pasaoa
Redux Root Reducer | Todos a la Redux | React Redux Two Lab
*/


// EXTERNALS - LOCALS
import { combineReducers } from 'redux';

import todosReducer from './reducers/todosReducer';
import uiReducer from './reducers/uiReducer';


// COMBINEREDUCERS
export default combineReducers({ 
  todosState: todosReducer,
  uiState: uiReducer
});
