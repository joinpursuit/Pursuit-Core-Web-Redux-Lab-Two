import React from 'react';

import './App.css';
import AddTodo from './components/AddTodo';
import DisplayTodos from './components/DisplayTodo';

function App() {
  return (
    <div className="App">
      <AddTodo />
      <DisplayTodos/>
      
    </div>
  );
}

export default App;
