import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { addToDo } from "./action/toDoListAction"

// import { addFruit } from './actions/fruitStandActions';

import store from "./store/store"
window.addToDo = addToDo;
window.store = store; 


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// Create a component that lists all the farmers and a componenet that 
// adds a new farmer to your store. 