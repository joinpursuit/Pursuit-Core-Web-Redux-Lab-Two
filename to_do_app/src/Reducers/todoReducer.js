import { ADD_TODO, TOGGLE_TODO } from "../Actions/actionTypes";

import { addTodo, toggleToDo } from "../Actions/actions";
//do i need to import that action functions?

//is there where i say what i want the initial state to be? and should it be a todo since this is what we are updating?
const initialState = {
  id: 0,
  text: "",
  completed: false
};

const todoReducer = (state = initialState, action) => {
  //reducers update application state by action types?
  Object.freeze(state);
  const newState = { ...state };
  //do i need to create a newState like this everytime?
  switch (action.type) {
    case ADD_TODO:
      //is this where i create what i want to come out of this reducer? like here i'm trying to update a 'todo' item as the case ADD_TODO is true? what does it really mean to update the application state?
      let todo = {
        id: action.payload.id,
        text: action.payload.item,
        completed: false
      };
  }
};

//not really sure what should be returned from the reducer.

export default todoReducer;
