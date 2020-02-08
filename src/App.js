/*
Joseph P. Pasaoa
App MAIN | Todos a la Redux | React Redux Two Lab
*/


// EXTERNALS - LOCALS
import React from 'react';

// import './App.css';
import AddForm from './components/AddForm';
import VisibilitySwitch from './components/VisibilitySwitch';
import TodosList from './components/TodosList';


// MAIN
const App = () => {
  return (
    <div className="App">
      <h1>Todos a la Redux</h1>
      <AddForm />
      <VisibilitySwitch />
      <TodosList />
      <footer>Copyright © 2020 by Joseph P. Pasaoa. All rights reserved.</footer>
    </div>
  );
}


export default App;
