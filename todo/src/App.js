import React from "react";
// import "./App.css";
import CreateTodo from "./components/CreateTodo";
import DisplayTodos from "./components/DisplayTodos";

function App() {
  return (
    <div className="App">
      <h1>My ToDo List</h1>
      <CreateTodo />
      <DisplayTodos />
    </div>
  );
}

export default App;
