import { createStore } from "redux";
import rootReducer from "../reducers/rootReducer";

const store = createStore(rootReducer, {
  toDos: {},
});

export default store;
