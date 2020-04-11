import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterTodo } from '../actions/todoActions'

const FilterVisibility = () => {
	// const todolist = useSelector((state) => {
	// 	return Object.values(state.todos);
	// });
	const filterState = useSelector((state) => {
		return state.filter
	})
	const dispatch = useDispatch();
	const handleClick = (e) => {
		dispatch(filterTodo())

		


    //   debugger;
		// if (e.target.value === "Active") {
		// 	return todolist.filter((todo) => todo.completed === false);
		// } else if (e.target.value === "Complete") {
		// 	return todolist.filter((todo) => todo.completed !== false);
		// } else {
		// 	return todolist;
		// }
	};
	console.log(filterState)

	return (
		<div>
			<form onSubmit={(e) => e.preventDefault()}>
				<label className="label">Show:</label>
				<button value="All" onClick={handleClick}>
					Show All
				</button>
				<button value="Active" onClick={handleClick}>
					Active
				</button>
				<button value="Complete" onClick={handleClick}>
					Completed
				</button>
			</form>
		</div>
	);
};

export default FilterVisibility;
