/*
Joseph P. Pasaoa
Redux Store | Todos a la Redux | React Redux Two Lab
*/


// EXTERNALS - LOCALS
import { createStore } from 'redux';

import rootReducer from './rootReducer';


// STORE
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


export default store;
