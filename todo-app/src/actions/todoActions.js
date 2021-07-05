import { ADD_TODO, TOGGLE_TODO, SET_FILTER } from "./actionTypes";

export const createTodo = (todo) => {
	return {
		type: ADD_TODO,
		payload: {
			id,
			text: todo,
			completed: false
		}
	};
};

export const markComplete = (id) => {
	return {
		type: TOGGLE_TODO,
		payload: id,
	};
};

export const filterTodo = (todo) => {
	return {
		type: SET_FILTER,
		payload: todo
	};
};
