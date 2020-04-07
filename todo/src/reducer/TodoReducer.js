import { ADD_TODO, TOGGLE_TODO, SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED} from '../actions/actionTypes'
//index number would be the id
//[{comepleted != true},{}]


const TodoReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.payload]
        case TOGGLE_TODO: 
            return state.map(todo =>
                todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
            )
        case SHOW_ALL: 
            return state

        case SHOW_ACTIVE: 
            return state.filter(todos => !todos.completed)

        case SHOW_COMPLETED: 
            return state.filter(todos => todos.completed)
        default:
            return state; 
    }
}

export default TodoReducer;