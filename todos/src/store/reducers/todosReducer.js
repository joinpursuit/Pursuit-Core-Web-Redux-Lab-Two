const initialState = {
  nextTodoId: 1,
  todos: [],
  visibilityFilter: 'all'
}

const todosReducer = (state = initialState, action) => {
  const newState = { ...state }

  switch(action.type) {
    case 'ADD_TODO':
      newState.todos = action.payload
      newState.nextTodoId++
      break
    case 'TOGGLE_TODO':
      for (let i = 0; i < newState.todos.length; i++) {
        if (newState.todos[i].id === action.payload) {
          let newTodo = newState.todos[i]
          if (newState.todos[i].completed === false) {
            newTodo.completed = true
            newTodo.style = {textDecoration: 'line-through'}
          } else if (newState.todos[i].completed === true) {
            newTodo.completed = false
            newTodo.style = {textDecoration: 'none'}
            }
          newState.todos.splice(i,1,newTodo)
        }
      }
      break
    case 'SET_VISIBILITY_FILTER':
      newState.visibilityFilter = action.payload
      break
    default:
      break
  }

  return newState
}

export default todosReducer
