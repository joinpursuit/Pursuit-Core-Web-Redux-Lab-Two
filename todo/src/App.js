import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from "./components/todo.js"
import Todolist from "./components/TodoList"

function App() {
  return (
    <div className="App">
    Hello
    <Todo/>
    <Todolist/>
    </div>
  );
}

export default App;
