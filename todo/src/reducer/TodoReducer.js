import { ADD_TODO, TOGGLE_TODO} from '../actions/actionTypes'
//index number would be the id
//[{comepleted != true},{}]


const TodoReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.payload]
        case TOGGLE_TODO: 
        return state.map(todo =>
            todo.id === action.id ? todo.completed=true : todo
          )
        default:
            return state; 
    }
}

export default TodoReducer;