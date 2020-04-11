import React from "react";
import { useDispatch } from "react-redux";
import { filterTodo } from '../actions/todoActions'

const FilterVisibilityBtn = () => {
	const dispatch = useDispatch();
	const handleClick = (e) => {
		dispatch(filterTodo(e.target.value))
	}
	
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

export default FilterVisibilityBtn;
