/*
Joseph P. Pasaoa
INDEX | Todos a la Redux | React Redux Two Lab
*/


    // external imports
    import React from 'react';
    import ReactDOM from 'react-dom';
    import { Provider } from 'react-redux';

    // local
    import store from './redux/store.js';
    import './index.css';

    import App from './App';


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root'));
