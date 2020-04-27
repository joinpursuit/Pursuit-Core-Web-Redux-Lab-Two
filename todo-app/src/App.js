import React from "react";

import "./App.css";
import AddTodo from "./components/AddTodo";
import DisplayTodos from "./components/DisplayTodo";
import FilterVisibilityBtn from "./components/FilterTodo";

function App() {
	return (
		<div className="App">
			<h1>My To-Do List</h1>
			<AddTodo />
			<DisplayTodos />
			<FilterVisibilityBtn />
		</div>
	);
}

export default App;
