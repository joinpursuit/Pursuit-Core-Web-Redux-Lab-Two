import React from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoList from "./component/ToDoList"
import AddList from './component/AddList';
function App() {
  return (
    <div className="App">
      {/* <AddList/> */}
      <ToDoList/>
    </div>
  );
}

export default App;
