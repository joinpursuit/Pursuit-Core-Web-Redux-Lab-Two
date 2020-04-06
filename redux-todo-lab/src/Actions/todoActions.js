import {IDSEQ, ADDTODO, DOTODO, FILTERTODO} from './todoActionTypes'

const idSequence = () => {
    return {
        type: IDSEQ
    }
}

const addToDo = (todo) => {
    return {
        type: ADDTODO,
        payload: todo //todo Object
    }
}

const doToDo = (id) => {
    return {
        type: DOTODO,
        payload: id
    }
}

const filterToDo = (filter=null) => {
    return {
        type: FILTERTODO,
        payload: filter
    }
}