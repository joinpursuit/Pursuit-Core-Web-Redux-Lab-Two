import React from 'react';
import './App.css';
import TodoForm from './components/todoForm'
import { TodoList } from './components/todoList'
import Visibility from './container/setVisibility'

function App() {
  return (
    <div className="App">
      <TodoForm />
      <TodoList />
      <Visibility />
    </div>
  );
}

export default App;
