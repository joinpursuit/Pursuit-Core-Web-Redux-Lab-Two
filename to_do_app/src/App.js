import React from "react";
import "./App.css";
import ToDo from "./Components/ToDo";
import TodoList from "./Components/TodoList";
import VisibilityFilter from "./Components/VisibilityFilter";
import PostsList from "./Components/postsList";

function App() {
  return (
    <div className="App">
      <ToDo />
      <TodoList />
      <VisibilityFilter />
      <PostsList />
    </div>
  );
}

export default App;
