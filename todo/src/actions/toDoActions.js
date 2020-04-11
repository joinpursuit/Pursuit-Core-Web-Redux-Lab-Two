import axios from 'axios'
import { recieveErrors, clearErrors } from './errorActions'
import { ADD_ITEM, TOGGLE_TODO, FETCH_TODOS } from './actionTypes'


export const createTodo = (todo) =>  async (dispatch) => {
    try {
        dispatch(clearErrors())
        let res = await axios.post("http://localhost:3000/todo/addTodo", {
            text: todo
        })
        dispatch(addItem(todo))
    } catch (error) {
        dispatch(recieveErrors(error.message))
    }
}

export const fetchAllTodos = () => async (dispatch) => {
    try {
     dispatch(clearErrors())
     let res = await axios.get("http://localhost:3000/todo/")
     debugger
     dispatch(fetchTodos(res.data.body.todos))
    } catch (error) {
        dispatch(recieveErrors(error.message))   
    }
}

export const fetchTodos = (todos) => {
    return {
        type: FETCH_TODOS,
        payload: todos
    }
}

export const addItem = (item) => {
    return {
        type: ADD_ITEM,
        payload: item   
    }
}

export const toggleTodo = (id) => {
    return {
        type: TOGGLE_TODO,
        payload: id
    }
}