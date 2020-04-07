import { ADD_TODO } from "../Actions/ActionTypes";

const _defaultState = {};
// let objId = 0;
const TodoReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  const newState = { ...state };
  switch (action.type) {
    case ADD_TODO:
      let list = {
        ...action.payload,
      };
      newState[action.payload.id] = list;
      return newState;
    default:
      return state;
  }
};

export default TodoReducer;


