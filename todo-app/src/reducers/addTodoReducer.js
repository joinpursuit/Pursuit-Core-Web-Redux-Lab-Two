import { ADD_TODO } from "../actions/actionTypes"

const _defaultState ={}
const todoReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  const newState ={ ...state }
  switch (action.type) {
    case ADD_TODO:
      let todo = { ...action.payload, complete: false }
      newState[todo.id] = todo
      return newState
    default:
      return state;
  }
}
export default todoReducer;