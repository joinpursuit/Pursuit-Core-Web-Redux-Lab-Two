import { createStore } from 'redux';
// import rootReducer from 
const store = createStore(
  rootReducer,
  {
    todoList: [],
    todo : {
      id: 1,
      text: "Buy groceries",
      completed: true // or false
    }
  }
)
export default store;