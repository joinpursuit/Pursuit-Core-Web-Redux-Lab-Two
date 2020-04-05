import React from 'react';
import './App.css';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className="App">
      <h1>ToDo App</h1>
      <ToDoForm />
      <ToDoList/> 
    </div>
  );
}

export default App;