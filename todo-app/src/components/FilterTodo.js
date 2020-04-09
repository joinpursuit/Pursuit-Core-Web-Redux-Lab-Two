import React from "react";
import { useSelector } from "react-redux";

const FilterVisibility = () => {
	const todolist = useSelector((state) => {
		return Object.values(state.todos);
	});

	const handleClick = (e) => {
      debugger;
		if (e.target.value === "Active") {
			return todolist.filter((todo) => todo.completed === false);
		} else if (e.target.value === "Complete") {
			return todolist.filter((todo) => todo.completed !== false);
		} else {
			return todolist;
		}
	};

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
