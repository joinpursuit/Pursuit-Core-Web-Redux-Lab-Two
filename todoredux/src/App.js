import React from "react";
import Home from './Components/Home'
import Counter from './Components/Counter';
import AddTodo from "./Components/AddTodo";
// import TodoList from "./Components/TodoList";
// import VisibilityFilters from "./Components/VisibilityFilters";
import { Switch, Route, Link } from 'react-router-dom';
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <nav>
        <ul className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/counter">Counter</Link>
          <Link to="/addTodo">AddTodo</Link>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/counter" component={Counter} />
        <Route path="/addtodo" component={AddTodo} />
        {/* <TodoList /> */}
        {/* <VisibilityFilters /> */}
      </Switch>
    </div>
  );
}
