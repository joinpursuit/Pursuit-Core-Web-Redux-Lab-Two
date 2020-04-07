import React from 'react';

import './App.css';
import AddTodo from './components/AddTodo';
import DisplayTodos from './components/DisplayTodo';
import FilterVisibility from './components/FilterTodo';

function App() {
  return (
    <div className="App">
      <h1>My To-Do List</h1>
      <AddTodo />
      <DisplayTodos/>
      <FilterVisibility />
      
    </div>
  );
}

export default App;
