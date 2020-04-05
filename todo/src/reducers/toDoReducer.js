import { ADD_ITEM } from '../actions/actionTypes'

const _defaultState = {}
const toDoReducer = (state = _defaultState, action) => {
    Object.freeze(state)
    const newState = {...state}
    switch (action.type) {
        case ADD_ITEM:
            let item = action.payload
            newState[item.id] = item
            return newState
        default:
            return state
    }
}

export default toDoReducer;