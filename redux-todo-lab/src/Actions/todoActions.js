import {ADDTODO, DOTODO, FILTERTODO} from './todoActionTypes'

const addTodo = (todo) => {
    return {
        type: ADDTODO,
        payload: todo //todo Object
    }
}

const doToDo = (id) => {
    return 
}