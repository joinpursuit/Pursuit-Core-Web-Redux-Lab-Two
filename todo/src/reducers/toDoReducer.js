import { ADD_ITEM, TOGGLE_TODO, FETCH_TODOS } from '../actions/actionTypes'

const _defaultState = {}
const toDoReducer = (state = _defaultState, action) => {
    Object.freeze(state)
    const newState = {...state}
    switch (action.type) {
        case ADD_ITEM:
            let item = action.payload
            newState[item.id] = item
            return newState

        case TOGGLE_TODO:
            let id = action.payload
            let newItem = newState[id]
            newItem.completed = !newItem.completed
            return newState
            
        case FETCH_TODOS:
            let todos = action.payload
            return {...newState, ...todos}
        default:
            return state
    }
}

export default toDoReducer;