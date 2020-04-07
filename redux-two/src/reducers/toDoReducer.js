import {ADD_TODO, CLEAR_TODO} from '../actions/actionTypes'

const _defaultState ={}
const toDoReducer =(state=_defaultState, action)=>{
    Object.freeze(state);
	const newState = { ...state };
	
	switch (action.type) {
		case ADD_TODO:
			let newToDo = { ...action.payload, completed: false };
			newState[newToDo.id] = newToDo;
			return newState;
		case CLEAR_TODO:
			let clearToDo = newState[action.payload];
            clearToDo.completed = true;
			return newState;
		default:
			return state;
	}

}


export default toDoReducer;