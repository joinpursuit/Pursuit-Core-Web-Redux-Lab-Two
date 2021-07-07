import { createStore } from "redux";
// import todoReducer from "./reducers/todoReducer";
import rootReducer from "./reducers/rootReducer";

export const store = createStore(rootReducer);
