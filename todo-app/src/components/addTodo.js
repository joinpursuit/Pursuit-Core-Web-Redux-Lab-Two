import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../actions/todoActions";

const AddTodo = () => {
	const [input, setInput] = useState("");
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(createTodo(input));
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					placeholder="todo"
					text="text"
					value={input}
					onChange={(e) => setInput(e.target.value)}
				/>
				<button>Add Todo</button>
			</form>
		</div>
	);
};

export default AddTodo;
