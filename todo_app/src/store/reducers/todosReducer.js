import {ADD_TODOS} from '../actionTypes'
import {TOGGLE_TODOS} from '../actionTypes'
import {VISIBILITY_FILTER} from '../actionTypes'

const initialState = {
    nextTodoId: 0,
    todos: [],
    visibilityFilter: 'all'
}

export const addTodos = (state = initialState, action) => ({
    type: ADD_TODOS,
    payload: {
       id: 1,
       action
    }
})

export const toggleTodos = content => ({
    type: TOGGLE_TODOS,
    payload: {
      
    }
})

export const visibilityFilter = content => ({
    type: VISIBILITY_FILTER,
    payload: {

    }
})

export default addTodos