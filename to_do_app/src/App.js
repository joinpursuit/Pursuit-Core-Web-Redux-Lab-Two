import React from "react";
import "./App.css";
import ToDo from "./Components/ToDo";
import TodoList from "./Components/TodoList";
import VisibilityFilter from "./Components/VisibilityFilter";

function App() {
  return (
    <div className="App">
      <ToDo />
      <TodoList />
      <VisibilityFilter />
    </div>
  );
}

export default App;
