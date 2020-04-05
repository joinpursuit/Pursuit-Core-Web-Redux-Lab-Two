import { ADD_TODO, REMOVE_TODO, TOGGLE_COMPLETED } from '../actions/actionTypes'

const init = {
    nextTodoId: 0,
    todos: [],
    visibilityFilter: "all" // One of "all", "completed" or "active"
}

const newTodo = (id, text, completed = false) => ({ id, text, completed })
const removeTodo = (todos, id) => todos.filter(todo => todo.id === id ? null : todo)
const toggledTodo = (todos, id) => todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)

const todoReducer = (state = init, action) => {
    const stateCopy = { ...state }
    switch (action.type) {
        case ADD_TODO:
            const todo = newTodo(state.nextTodoId + 1, action.payload.text)
            stateCopy.todos.push(todo)
            stateCopy.nextTodoId++;
            break;
        case REMOVE_TODO:
            stateCopy.todos = removeTodo(stateCopy.todos, action.payload.id)
            break;
        case TOGGLE_COMPLETED:
            stateCopy.todos = toggledTodo(stateCopy.todos, action.payload.id)
            break;
        default:
            break;
    }
    return stateCopy;
}

export default todoReducer;