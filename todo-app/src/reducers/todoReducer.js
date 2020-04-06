import { ADD_TODO, TOGGLE_TODO } from "../actions/actionTypes";

const _defaultState = {};
const todoReducer = (state = _defaultState, action) => {
	Object.freeze(state);
	const newState = { ...state };
	
	switch (action.type) {
		case ADD_TODO:
			let todo = { ...action.payload, completed: false };
			newState[todo.id] = todo;
			return newState;
		case TOGGLE_TODO:
			let todoComplete = newState[action.payload];
			todoComplete.completed = true;
			return newState;
		default:
			return state;
	}
};
export default todoReducer;
