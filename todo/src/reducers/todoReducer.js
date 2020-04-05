const { ADD_ITEM } = require('../actions/todoAction');

const todoReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return [...state, action.payload]
        default:
            return state; 
    }
}

export default todoReducer;