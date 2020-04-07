import { createStore } from "redux";
import rootReducer from "../Reducers/rootReducer";

const store = createStore(rootReducer);
//do i need to add initialState here too?

export default store;
