import { CLEAR_ERRORS, RECIEVE_ERROR } from './actionTypes'

export const clearErrors = () => ({
    type: CLEAR_ERRORS
})

export const recieveErrors = (err) => ({
    type: RECIEVE_ERROR,
    payload: err
})