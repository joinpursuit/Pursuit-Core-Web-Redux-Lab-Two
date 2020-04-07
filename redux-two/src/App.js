import React from 'react';
import './App.css';
import ToDoComponent from './components/ToDoComponent';
import CreateToDo from './components/CreateToDo';

function App() {
  return (
    <div className="App">
      To Do List
      <ToDoComponent/>
      <CreateToDo/>
    </div>
  );
}

export default App;
