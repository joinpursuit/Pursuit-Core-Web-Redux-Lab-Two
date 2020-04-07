import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from "./components/todo.js"
import Visiblebtn from "./components/Visiblebtn"
import Todolist from "./components/TodoList"

function App() {
  return (
    <div className="App">
      Todo List App
      <Todo/>
      <Todolist/>
      <Visiblebtn/>
    </div>
  );
}

export default App;
