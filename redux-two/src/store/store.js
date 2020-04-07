import {createStore} from 'redux'
import rootReducer from "../reducers/rootReducer"
const store = createStore(rootReducer, {toDo:[],
                                            name:{
                                                1:{id:1, name: "dishes", completed:false},
                                                2:{id:2, name: "groceries", completed: true}
                                            }

})

export default store;