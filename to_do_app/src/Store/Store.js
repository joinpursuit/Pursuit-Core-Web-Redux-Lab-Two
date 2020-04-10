import { createStore, applyMiddleware } from "redux";
import rootReducer from "../Reducers/rootReducer";
import logger from "redux-logger"
import thunk from "redux-thunk"
//think will allow us to dispatch functions as well as actions
//logger will allow us to use middleware

const store = createStore(rootReducer, {}, applyMiddleware(logger, thunk));
//do i need to add initialState here too?

export default store;
