import { createStore } from 'redux'
import rootReducer from '../Reducers/rootReducer'

const store = createStore(rootReducer, {nextTodoId: 1,
                                        todos: [],
                                        visibilityFilter: "all" // One of "all", "completed" or "active"
                                        })

export default store;