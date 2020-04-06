import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../actions/todoActions";
let autoId = 0;

const AddTodo = () => {
	const [text, setText] = useState("");
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(
			createTodo({
				id: autoId++,
				text,
			})
		);
		setText("");
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					placeholder="todo"
			    type="text"
					value={text}
					onChange={(e) => setText(e.target.value)}
				/>
				<button>Add Todo</button>
			</form>
		</div>
	);
};

export default AddTodo;
