import { SET_FILTER, VISIBILITY_FILTERS } from '../actions/actionTypes';


const initialState = VISIBILITY_FILTERS.ALL;

export const visibilityFilter = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILTER: {
            return action.payload.filter;
        }
        default: {
            return state;
        }
    }
};

