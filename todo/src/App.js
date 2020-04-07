import React from 'react';
import './App.css';
import CreateTodo from './Components/CreateTodo'
import DisplayTodo from './Components/DisplayTodo';

function App() {
  return (
    <div className="App">
      <CreateTodo />
      <DisplayTodo />
    </div>
  );
}

export default App;
