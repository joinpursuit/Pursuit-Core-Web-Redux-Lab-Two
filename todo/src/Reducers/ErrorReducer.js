import { CLEAR_ERRORS, RECEIVE_ERROR } from "../Actions/ActionTypes";

const errorsReducer = (state = "", action) => {
    switch (action.type) {
        case RECEIVE_ERROR:
            return action.payload;    
        case CLEAR_ERRORS: 
            return "";
        default:
            return state;
    }
}

export default errorsReducer;