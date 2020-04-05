import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../actions/todoActions";
let autoId = 3;

const AddTodo = () => {
	const [input, setInput] = useState("");
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(
			createTodo({
				id: autoId++,
				input,
			})
		);
		setInput("");
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
