import { createStore } from 'redux'
import todoReducer from '../Reducers/todoReducer'

const store = createStore(todoReducer, {nextTodoId: 1,
                                        todos: [],
                                        visibilityFilter: "all" // One of "all", "completed" or "active"
                                        })

export default store;