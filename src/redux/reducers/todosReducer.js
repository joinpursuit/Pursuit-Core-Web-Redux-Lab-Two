/*
Joseph P. Pasaoa
Redux Todos Reducer | Todos a la Redux | React Redux Two Lab
*/


// EXTERNALS - LOCALS
import { ADD_TODO, TOGGLE_COMPLETED } from '../actionTypes';


const INITIAL_STATE = {
  todos: [],
  nextId: 0
}

const todosReducer = (state = INITIAL_STATE, action) => {
  const newState = { ...state };
  switch (action.type) {
    case ADD_TODO:
      const newTodoObject = {
        id: state.nextId,
        text: action.payload.todoTxt,
        completed: false
      }
      newState.todos = [
        ...state.todos,
        newTodoObject
      ];
      newState.nextId += 1;
      break;
    case TOGGLE_COMPLETED:
      const targetTodo = newState.todos[action.payload.todoId];
      targetTodo.completed = !targetTodo.completed;
      console.log(newState);
      break;
    default:
      break;
  }
  return newState;
}

export default todosReducer;
