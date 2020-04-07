import {createStore} from "redux"
import toDoListReducer from "../reducer/toDoListReducer"

const store = createStore(toDoListReducer)

export default store